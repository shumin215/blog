# Synology NAS SSH 키 인증 설정 가이드

## 환경 정보

| 항목 | 값 |
|------|-----|
| NAS IP | 192.168.0.5 |
| SSH 포트 | 2200 |
| NAS 사용자 | shumin |
| SSH 키 경로 | `~/.ssh/blog_nas` |
| WordPress 경로 | `/volume1/web/wp` |

---

## 1. SSH 키 생성 (Windows)

```bash
ssh-keygen -t ed25519 -C "blog-migration" -f ~/.ssh/blog_nas -N ""
```

- 생성 파일: `~/.ssh/blog_nas` (개인키), `~/.ssh/blog_nas.pub` (공개키)

---

## 2. NAS에 공개키 등록

```bash
ssh-copy-id -i ~/.ssh/blog_nas.pub -p 2200 shumin@192.168.0.5
```

- NAS 비밀번호 입력 요구됨
- 공개키가 NAS의 `~/.ssh/authorized_keys`에 자동 추가됨

---

## 3. NAS SSH 설정 변경

NAS 터미널에서 직접 실행 (비밀번호로 먼저 접속):

```bash
# 공개키 인증 활성화
sudo sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config
sudo sed -i 's/#AuthorizedKeysFile/AuthorizedKeysFile/' /etc/ssh/sshd_config

# StrictModes 비활성화 (Synology 홈 디렉토리 ACL 문제 해결)
sudo sed -i 's/#StrictModes yes/StrictModes no/' /etc/ssh/sshd_config

# SSH 서비스 재시작
sudo systemctl restart sshd
```

> **StrictModes 비활성화가 필요한 이유**
> Synology의 홈 디렉토리(`/volume1/homes/shumin`)는 시스템이 관리하는 ACL 권한(`drwxrwxrwx+`)을 가짐.
> SSH의 StrictModes가 이를 "너무 개방적"으로 판단해 키 인증을 거부하므로 비활성화 필요.

---

## 4. authorized_keys 권한 설정

```bash
chmod 600 ~/.ssh/authorized_keys
```

> `ssh-copy-id`로 등록 시 777로 설정되는 경우가 있어 600으로 변경 필요.

---

## 5. Synology 자동 차단(Auto Block) 설정

반복 로그인 실패 시 IP가 자동 차단되므로 로컬 PC IP를 허용 목록에 추가.

**방법 1 - DSM UI:**
1. 제어판 → 보안 → 자동 차단 → 허용/거부 목록
2. **허용 목록** → 생성 → **단일 호스트** 선택 → IP `192.168.0.2` 입력

**방법 2 - 차단 해제 (잠겼을 때):**
```bash
# NAS 터미널에서 실행
sudo synoautoblock --reset 192.168.0.2

# 자동 차단 일시 비활성화 (DSM 접속 불가 시)
sudo synosetkeyvalue /etc/syno_system.conf autoblock_enable false
sudo systemctl restart sshd

# DSM 접속 후 허용 목록 추가 완료되면 다시 활성화
sudo synosetkeyvalue /etc/syno_system.conf autoblock_enable true
```

---

## 6. SSH 접속 테스트

```bash
# SSH 에이전트에 키 등록 후 접속
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/blog_nas
ssh -p 2200 shumin@192.168.0.5 "echo 'SSH connection successful'"
```

---

## 접속 명령어 (일반 사용)

```bash
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5
```

---

## 문제 해결

| 증상 | 원인 | 해결 |
|------|------|------|
| `kex_exchange_identification` 에러 | IP 자동 차단 | `sudo synoautoblock --reset [IP]` |
| `Authentication refused: bad ACL` | StrictModes 활성화 | `StrictModes no` 설정 |
| `Permission denied (publickey)` | 키 인증 비활성화 | `PubkeyAuthentication yes` 설정 |
| `no identity pubkey loaded` | SSH 에이전트 미등록 | `ssh-add ~/.ssh/blog_nas` 실행 |

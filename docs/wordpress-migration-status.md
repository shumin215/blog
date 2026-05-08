# WordPress Migration Status

This document tracks all published posts in the NAS WordPress database by category, showing which posts are already reflected in GitHub `origin/main`, which migration PRs were declined, and which posts are not migrated yet.

## Source and Rules

- WordPress source: `post_status=publish`, `post_type=post`
- Migrated status: WordPress slug matches a `.md` or `.mdx` file under `origin/main:src/content/posts/`
- Declined status: a migration PR was closed without merge
- A post with multiple WordPress categories appears in each category table.

## Overall Summary

| Status | Unique post count |
|--------|------------------:|
| Migrated to main | 9 |
| Declined | 3 |
| Not migrated | 334 |
| Total | 346 |

## Summary by WordPress Category

| WordPress category | Total | Migrated to main | Declined | Not migrated |
|--------------------|------:|-----------------:|---------:|-------------:|
| Programming | 134 | 0 | 0 | 134 |
| English | 109 | 0 | 1 | 108 |
| Fancy Expression | 87 | 0 | 1 | 86 |
| Study | 60 | 0 | 0 | 60 |
| Python | 44 | 0 | 0 | 44 |
| Linux | 37 | 0 | 0 | 37 |
| Git | 31 | 0 | 0 | 31 |
| Algorithm | 21 | 0 | 0 | 21 |
| English Basic | 16 | 0 | 0 | 16 |
| OS | 15 | 0 | 0 | 15 |
| Computer Architecture | 13 | 0 | 0 | 13 |
| Persnal | 12 | 0 | 0 | 12 |
| C / C++ | 11 | 0 | 0 | 11 |
| Posting | 11 | 0 | 0 | 11 |
| Series | 11 | 9 | 2 | 0 |
| Wordpress | 11 | 0 | 0 | 11 |
| Experience | 9 | 0 | 0 | 9 |
| Digital Logic | 8 | 0 | 0 | 8 |
| Reverse Engineering | 8 | 8 | 0 | 0 |
| Vim | 7 | 0 | 0 | 7 |
| Dialog | 5 | 0 | 0 | 5 |
| Etc. | 5 | 0 | 0 | 5 |
| NAS | 4 | 0 | 0 | 4 |
| PyQt | 3 | 1 | 1 | 1 |
| Compiler | 2 | 0 | 0 | 2 |
| About Shumin | 1 | 0 | 0 | 1 |
| System Verilog | 1 | 0 | 0 | 1 |

## Details by WordPress Category

<details>
<summary>Programming ? total 134, migrated 0, declined 0, not migrated 134</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 917 | 2019-12-05 | Verdi 단축키 | `verdi-단축키` | Not migrated |  |
| 951 | 2020-01-23 | What is this operator called as “+:” in Verilog | `what-is-this-operator-called-as-in-verilog` | Not migrated |  |
| 1030 | 2020-03-17 | [Git] 파일 이름 변경 또는 삭제 후 로컬 저장소에 반영하기 | `git-파일-이름-변경-또는-삭제-후-로컬-저장소에-반영하` | Not migrated |  |
| 1033 | 2020-03-17 | [Git] Add 명령어 | `git-git-add` | Not migrated |  |
| 1035 | 2020-03-17 | [Git] Push하지 않은 Commit 되돌리기 | `git-push하지-않은-commit-되돌리기` | Not migrated |  |
| 1039 | 2020-03-30 | tmux 설치 | `tmux-설치` | Not migrated |  |
| 1046 | 2020-04-06 | [Git] Branch 명령어 | `git-branch-가져오기` | Not migrated |  |
| 1054 | 2020-04-07 | [Git] Remote 명령어 | `git-remote-명령어` | Not migrated |  |
| 1085 | 2020-07-10 | [Python] 함수의 특징 - 1 | `python-함수의-의미` | Not migrated |  |
| 1097 | 2020-07-16 | [Python] 함수의 특징 - 2 | `python-함수의-특징` | Not migrated |  |
| 1110 | 2020-07-16 | [Python] Nested Function | `python-nested-function` | Not migrated |  |
| 1112 | 2020-07-16 | [Python] Lambda Function | `python-lambda-function` | Not migrated |  |
| 1120 | 2020-07-16 | [Python] 함수 Metadata | `python-함수-metadata` | Not migrated |  |
| 1123 | 2020-07-16 | [Python] Closure | `python-closure` | Not migrated |  |
| 1127 | 2020-07-17 | [Python] Decorator | `python-decorator` | Not migrated |  |
| 1129 | 2020-07-17 | [Python] Iterator | `python-iterator` | Not migrated |  |
| 1136 | 2020-07-17 | [Python] Generator | `python-generator` | Not migrated |  |
| 1151 | 2020-07-17 | [Python] dropwhile | `python-dropwhile` | Not migrated |  |
| 1155 | 2020-07-17 | [Python] zip, zip_longest | `python-zip-zip_longest` | Not migrated |  |
| 1157 | 2020-07-17 | [Python] Coroutine | `python-coroutine` | Not migrated |  |
| 1163 | 2020-07-17 | [Python] Special Function | `python-instance-문자열-표현식` | Not migrated |  |
| 1176 | 2020-07-17 | [Python] Property | `python-property` | Not migrated |  |
| 1181 | 2020-07-18 | [Python] Override | `python-override` | Not migrated |  |
| 1183 | 2020-07-18 | [Python] Proxy Design Pattern | `python-proxy-design-pattern` | Not migrated |  |
| 1187 | 2020-07-18 | [Python] 다중 상속, MRO | `python-다중-상속` | Not migrated |  |
| 1191 | 2020-07-18 | [Python] Property Extension | `python-property-extension` | Not migrated |  |
| 1264 | 2020-07-27 | [Python] SSLError | `python-sslerror` | Not migrated |  |
| 1267 | 2020-07-27 | [Python] Web Page HTML 확인 | `python-web-page-html-확인` | Not migrated |  |
| 1269 | 2020-07-27 | [Python] BeautifulSoup | `python-beautifulsoup` | Not migrated |  |
| 1272 | 2020-07-27 | [Python] 구글 뉴스 클리핑 | `python-구글-뉴스-클리핑` | Not migrated |  |
| 1280 | 2020-07-27 | [Python] Selenium | `python-selenium` | Not migrated |  |
| 1334 | 2020-07-29 | [Python] Multi-Thread Queue Polling | `python-multi-thread-queue-polling` | Not migrated |  |
| 1342 | 2020-07-29 | [Python] PyQt | `python-pyqt` | Not migrated |  |
| 1352 | 2020-07-30 | [Python] PyQt Widget | `python-pyqt-widget` | Not migrated |  |
| 1359 | 2020-07-30 | [Python] PyQt - Layout | `python-pyqt-layout` | Not migrated |  |
| 1363 | 2020-07-30 | [Python] PyQt - QThread (OTP Program) | `python-pyqt-qthread-otp-program` | Not migrated |  |
| 1370 | 2020-07-30 | [Python] PyQt - 계산기 만들기 | `python-pyqt-계산기-만들기` | Not migrated |  |
| 1376 | 2020-07-31 | [Python] Google Search Trend | `python-google-search-trend` | Not migrated |  |
| 1389 | 2020-09-14 | [Linux] diff: 두 디렉토리에 각 파일 비교 | `linux-diff-두-디렉토리에-각-파일-비교` | Not migrated |  |
| 1393 | 2020-09-23 | [Linux] make: 'test' is up to date | `linux-make-test-is-up-to-date` | Not migrated |  |
| 1418 | 2020-10-24 | [Git] fatal: failed to write object | `git-fatal-failed-to-write-object` | Not migrated |  |
| 1740 | 2021-01-12 | [Git] .gitignore 설정 | `git-gitignore-설정` | Not migrated |  |
| 1743 | 2021-01-12 | [Git] Repository 생성 및 연결 | `git-repository-생성-및-연결` | Not migrated |  |
| 1901 | 2021-01-26 | [Vim] 특정 단어가 들어간 Line 지우기 / 남기기 | `vim-특정-단어가-들어간-line-지우기-남기기` | Not migrated |  |
| 1978 | 2021-03-27 | [Git] Reset 수행 후 복구 방법 | `git-reset-수행-후-복구-방법` | Not migrated |  |
| 1980 | 2021-03-27 | [Git] Revert: Repository에 Push한 Commit 되돌리기 | `git-revert-repository에-push한-commit-되돌리기` | Not migrated |  |
| 2002 | 2021-04-07 | [Linux] GDB 소개 | `linux-gdb` | Not migrated |  |
| 2010 | 2021-04-08 | [Linux] Makefile 소개 | `linux-makefile` | Not migrated |  |
| 2023 | 2021-04-11 | man No manual entry for [Command] | `man-no-manual-entry-for-command` | Not migrated |  |
| 2025 | 2021-04-11 | [Linux] 파일 입출력 함수 (fopen / fgetc / fputc / fclose / fgets / fputs / fread / fwrite) | `linux-파일-입출력-함수-fopen-fgetc-fputc-fclose` | Not migrated |  |
| 2050 | 2021-04-13 | [Linux] wc 명령어 구현 | `linux-wc-명령어-구현` | Not migrated |  |
| 2054 | 2021-04-13 | [Linux] cp 명령어 구현 | `linux-cp-명령어-구현` | Not migrated |  |
| 2057 | 2021-04-14 | [Linux] fseek / ftell 함수 | `linux-fseek-ftell-함수` | Not migrated |  |
| 2086 | 2021-04-17 | [Linux] Manual Section Number 의미 | `linux-manual-section-number-의미` | Not migrated |  |
| 2111 | 2021-04-18 | [Linux] 명령어 Option 추출 함수 (getopt) | `linux-명령어-option-추출-함수-getopt` | Not migrated |  |
| 2132 | 2021-04-19 | [Python] Python Open Source Project | `python-python-open-source-project` | Not migrated |  |
| 2173 | 2021-04-24 | [Linux] wait() System Call 함수 | `linux-wait-system-call-함수` | Not migrated |  |
| 2183 | 2021-04-25 | [Linux] exec 계열 함수 | `linux-exec-계열-함수` | Not migrated |  |
| 2200 | 2021-04-25 | [Linux] Pthread 개념 (pthread_create / pthread_join / pthread_exit) | `linux-pthread-개념` | Not migrated |  |
| 2230 | 2021-04-25 | [Linux] readline 구현 | `linux-readline-구현` | Not migrated |  |
| 2263 | 2021-05-03 | [Python] UnicodeEncodeError: ‘ascii’ codec can’t encode character | `python-unicodeencodeerror-ascii-codec-cant-encode-character` | Not migrated |  |
| 2269 | 2021-05-25 | [Git] fatal: refusing to merge unrelated histories | `git-fatal-refusing-to-merge-unrelated-histories` | Not migrated |  |
| 2273 | 2021-05-27 | [C / C++] #include 지시어 ""와 <> | `c-c-include-지시어-와` | Not migrated |  |
| 2277 | 2021-07-12 | [Git] Repository에 올라온 파일 삭제 (git rm) | `git-repository에-올라온-파일-삭제-git-rm` | Not migrated |  |
| 2280 | 2021-07-22 | [Git] 로컬 저장소에 Branch를 다른 원격 저장소의 다른 이름의 Branch로 Push | `git-로컬-저장소에-branch를-다른-원격-저장소의-다른-이름의` | Not migrated |  |
| 2282 | 2021-07-23 | [Python] Coding Convention (PEP 8) | `python-coding-convention-pep-8` | Not migrated |  |
| 2285 | 2021-08-01 | [C++] undefined reference to template | `c-undefined-reference-to-template` | Not migrated |  |
| 2287 | 2021-08-05 | [Linux] Ubuntu (64-Bit) 에 32-Bit Library Install | `linux-ubuntu-64-bit-에-32-bit-library-install` | Not migrated |  |
| 2294 | 2021-08-05 | [Linux] NASM 사용법 | `assembly-nasm-사용법` | Not migrated |  |
| 2336 | 2021-08-16 | [Linux] ptrace | `linux-ptrace` | Not migrated |  |
| 2338 | 2021-08-16 | [Linux] strace | `linux-strace` | Not migrated |  |
| 2343 | 2021-08-16 | [Linux] strace Terminal Session 붙이기 | `linux-strace-terminal-session-붙이기` | Not migrated |  |
| 2353 | 2021-08-20 | [Linux] strace 사용법 | `linux-strace-사용법` | Not migrated |  |
| 2370 | 2021-08-22 | [Linux] uftrace 설치 및 사용법 | `linux-uftrace-설치-및-사용법` | Not migrated |  |
| 2374 | 2021-08-23 | [Git] Commit간 변경된 파일 목록 조회 (git diff) | `git-commit간-변경된-파일-목록-조회` | Not migrated |  |
| 2390 | 2021-09-05 | [Python] 정규 표현식 (Regular Expression) | `python-정규-표현식-regular-expression` | Not migrated |  |
| 2414 | 2021-10-12 | [Python] Graph 그리기 (Matplotlib) | `python-graph-그리기-matplotlib` | Not migrated |  |
| 2419 | 2021-10-13 | [Python] Graph 그리기 (Pandas) | `python-graph-그리기-pandas` | Not migrated |  |
| 2440 | 2021-11-03 | [C++] Vector Erase시 Segmentation Fault | `c-vector-erase시-segmentation-fault` | Not migrated |  |
| 2442 | 2021-11-05 | [Git] Repository의 Branch 로컬 저장소로 가져오기 | `git-repository의-branch-로컬-저장소로-가져오기` | Not migrated |  |
| 2446 | 2021-11-05 | [Git] Repository의 Branch 삭제 | `git-repository의-branch-삭제` | Not migrated |  |
| 2448 | 2021-11-12 | [Git] 특정 파일 Add 취소 | `git-특정-파일-add-취소` | Not migrated |  |
| 2450 | 2021-11-12 | [Git] 특정 Commit 시점으로 이동 - Checkout | `git-특정-commit-시점으로-이동-checkout` | Not migrated |  |
| 2456 | 2021-11-15 | [Python] pip Install 시 SSLError | `python-pip-install-시-sslerror` | Not migrated |  |
| 2475 | 2021-11-19 | [Python] JSON 파일 활용 | `python-json-파일-활용` | Not migrated |  |
| 2534 | 2021-12-16 | [Vim] Buffer 명령어 | `vim-buffer-명령어` | Not migrated |  |
| 2536 | 2021-12-16 | [Vim] Cscope 사용법 | `vim-cscope-사용법` | Not migrated |  |
| 2538 | 2021-12-20 | [C++] Smart Pointer (unique_ptr / shared_ptr / weak_ptr) | `c-smart-pointer-unique_ptr-shared_ptr-weak_ptr` | Not migrated |  |
| 2543 | 2021-12-21 | [Vim] Cscope - E262: error reading cscope connection 0 | `vim-cscope-e262-error-reading-cscope-connection-0` | Not migrated |  |
| 2550 | 2021-12-27 | [C++] Rvalue Reference | `c-rvalue-reference` | Not migrated |  |
| 2567 | 2021-12-28 | [Vim] ^M (개행문자) 제거 | `vim-m-제거` | Not migrated |  |
| 2594 | 2022-01-06 | [Linux] Screen 사용법 | `linux-screen-사용법` | Not migrated |  |
| 2598 | 2022-01-08 | [Linux] update-alternatives: Ubuntu Package Version 관리 | `linux-update-alternatives-ubuntu-package-version-관리` | Not migrated |  |
| 2834 | 2022-03-02 | [Linux] Binary GLIBC Version Check | `linux-binary-glibc-version-check` | Not migrated |  |
| 2836 | 2022-03-03 | [Python] Python 및 Pip Package 설치 경로 확인 | `python-python-및-pip-package-설치-경로-확인` | Not migrated |  |
| 2944 | 2022-04-18 | [Git] Github Access Token 입력 생략하기 | `git-github-access-token-입력-생략하기` | Not migrated |  |
| 2946 | 2022-04-20 | [Linux] Slurm 사용법 | `linux-slurm-사용법` | Not migrated |  |
| 2970 | 2022-06-28 | [Git] Rebase 사용법 | `git-rebase-사용법` | Not migrated |  |
| 2973 | 2022-06-30 | [Vim] 문자열 치환 | `vim-문자열-치환` | Not migrated |  |
| 2975 | 2022-06-30 | [Linux] tmux 사용법 | `linux-tmux-사용법` | Not migrated |  |
| 2985 | 2022-07-06 | [C/C++] undefined reference to 'vtable for X' | `c-undefined-reference-to-vtable-for-x` | Not migrated |  |
| 2999 | 2022-07-25 | [C/C++] 접근 지정자 | `c-접근-지정자` | Not migrated |  |
| 3001 | 2022-07-26 | [C/C++] Parent Class에서 Child Class의 Variable or Function 접근 | `c-parent-class에서-child-class의-variable-or-function-접근` | Not migrated |  |
| 3009 | 2022-08-04 | [C/C++] Non-static Member Function Pointer in Class | `c-c-non-static-member-function-pointer-in-class` | Not migrated |  |
| 3014 | 2022-08-16 | [Git] Submodule 추가 | `git-submodule-추가` | Not migrated |  |
| 3025 | 2022-08-24 | [Etc.] Chrome "연결이 비공개로 설정되어 있지 않습니다." 페이지 제거 | `etc-chrome-연결이-비공개로-설정되어-있지-않습니다-페이` | Not migrated |  |
| 3027 | 2022-08-24 | [Linux] LSF 사용법 | `linux-lsf-사용법` | Not migrated |  |
| 3034 | 2022-08-29 | [Git] fetch 사용법 | `git-fetch-사용법` | Not migrated |  |
| 3037 | 2022-08-29 | [Git] show 명령어 | `git-git-show-commit-정보-탐색` | Not migrated |  |
| 3041 | 2022-08-29 | [Git] clone --bare vs. --mirror 차이 | `git-clone-bare-vs-mirror-차이` | Not migrated |  |
| 3046 | 2022-08-30 | [Git] 특정 Commit 가져오기 (Cherry-Pick) | `git-특정-commit-가져오기-cherry-pick` | Not migrated |  |
| 3052 | 2022-09-02 | [Linux] Bash Shell 특정 패턴 문자 제외 | `linux-bash-shell-특정-패턴-문자-제외` | Not migrated |  |
| 3059 | 2022-09-02 | [Git] rm 명령어 옵션 | `git-rm-명령어-옵션` | Not migrated |  |
| 3064 | 2022-09-02 | [Git] Commit History에서 크기가 가장 큰 파일 찾기 | `git-commit-history에서-크기가-가장-큰-파일-찾기` | Not migrated |  |
| 3066 | 2022-09-05 | [Git] Github Action 사용법 | `git-github-action-사용법` | Not migrated |  |
| 3078 | 2022-09-05 | [Git] Github Action Workflow 작성법 | `git-github-action-workflow-작성법` | Not migrated |  |
| 3093 | 2022-09-30 | [Linux] Bash set 명령어 | `linux-bash-set-명령어` | Not migrated |  |
| 3106 | 2022-10-28 | [Linux] Executable의 RPATH 확인 | `linux-executable의-rpath-확인` | Not migrated |  |
| 3113 | 2022-11-04 | CMake 사용법 | `cmake-사용법` | Not migrated |  |
| 3115 | 2022-11-04 | CMake 명령어 | `cmake-명령어` | Not migrated |  |
| 3122 | 2022-11-09 | CMake Pre-defined Variables | `cmake-pre-defined-variables` | Not migrated |  |
| 3135 | 2022-11-22 | [Linux] GDB Variable 출력 형태 바꾸기 / C++ STL Print | `linux-gdb-variable-출력-형태-바꾸기` | Not migrated |  |
| 3140 | 2022-11-30 | [Python] 다른 Python Source의 모듈 가져오기 | `python-다른-python-source의-모듈-가져오기` | Not migrated |  |
| 3142 | 2022-11-30 | [Python] Cannot Split, A bytes-like object is required, not 'str' | `python-cannot-split-a-bytes-like-object-is-required-not-str` | Not migrated |  |
| 3167 | 2022-12-27 | [Linux] Shell: $* vs. $@ | `linux-shell-vs` | Not migrated |  |
| 3170 | 2022-12-27 | [Linux] Redirection (2>&1) | `linux-redirection-21` | Not migrated |  |
| 3181 | 2022-12-29 | [Git] Tag 추가, 변경, 삭제, 검색, 비교, Checkout, Push | `git-tag-추가-변경-삭제-검색-비교-checkout-push` | Not migrated |  |
| 3254 | 2023-02-13 | [C++] STL priority_queue 사용법 | `c-stl-priority_queue-사용법` | Not migrated |  |
| 3260 | 2023-02-13 | [C++] STL set / map사용법 | `c-stl-set-map사용법` | Not migrated |  |
| 3408 | 2023-07-31 | VS Code X11 Forwarding over SSH | `vs-code-x11-forwarding-over-ssh` | Not migrated |  |
| 3449 | 2023-09-04 | [Git] Linear History with Foxtrot Merge | `git-linear-history-with-foxtrot-merge` | Not migrated |  |
| 3470 | 2023-10-10 | [Python] glob Module 사용법 | `python-glob-module-사용법` | Not migrated |  |
| 3472 | 2023-10-11 | [Python] Pandas DataFrame 간단한 사용법 | `python-pandas-dataframe-간단한-사용법` | Not migrated |  |
| 3501 | 2023-10-14 | [Python] Xlwings 사용법 | `python-xlwings-사용법` | Not migrated |  |

</details>

<details>
<summary>English ? total 109, migrated 0, declined 1, not migrated 108</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 757 | 2019-10-27 | [English] 당황하다 / 당황스럽다 | `english-당황하다-당황스럽다` | Not migrated |  |
| 764 | 2019-10-28 | [English] 생활 속 필수 표현 - 집편 | `english-생활-속-필수-표현-집편` | Not migrated |  |
| 791 | 2019-10-29 | [English] 영어로 인사하는 법 | `english-영어로-인사하는-법` | Not migrated |  |
| 813 | 2019-10-31 | [English] will / be going to 차이 | `english-will-be-going-to-차이` | Not migrated |  |
| 818 | 2019-11-04 | [English] have to / should / Be supposed to | `english-have-to-should-be-supposed-to` | Not migrated |  |
| 834 | 2019-11-04 | [English] 미안하다 | `english-미안하다` | Not migrated |  |
| 836 | 2019-11-06 | [English] 명절 맞이 표현 | `english-명절-맞이-표현` | Not migrated |  |
| 839 | 2019-11-07 | [English] find / look for / search | `english-find-look-for-search` | Not migrated |  |
| 856 | 2019-11-08 | [English] '알다'의 다양한 표현 | `english-알다의-다양한-표현` | Not migrated |  |
| 864 | 2019-11-09 | [English] would / could 사용법 | `english-would-could-사용법` | Not migrated |  |
| 873 | 2019-11-11 | [English] '오랜만에' 표현 | `english-오랜만에-표현` | Not migrated |  |
| 875 | 2019-11-12 | [English] if 가정법 - 1 | `english-if-가정법-1` | Not migrated |  |
| 879 | 2019-11-13 | [English] if 가정법 - 2 | `english-if-가정법-2` | Not migrated |  |
| 881 | 2019-11-13 | [English] if 가정법 - 3 | `english-if-가정법-3` | Not migrated |  |
| 886 | 2019-11-15 | [English] 원래 ~하려 했는데 / ~하게 됐다 | `english-원래-하려-했는데-하게-됐다` | Not migrated |  |
| 890 | 2019-11-17 | [English] '다행이다' 표현법 | `english-다행이다-표현법` | Not migrated |  |
| 892 | 2019-11-19 | [English] 교통수단에 대해 이야기 할 때 | `english-교통수단에-대해-이야기-할-때` | Not migrated |  |
| 895 | 2019-11-27 | [English] talk / speak / say / tell 구분 | `english-talk-speak-say-tell-구분` | Not migrated |  |
| 897 | 2019-11-28 | [English] be / get / become | `english-be-get-become` | Not migrated |  |
| 899 | 2019-11-30 | [English] 기대하다/ 기대되다 표현법 | `english-기대하다-기대되다-표현법` | Not migrated |  |
| 901 | 2019-12-01 | [English] '내가 알기로는' / '내가 듣기로는' 표현하기 | `english-내가-알기로는-내가-듣기로는-표현하기` | Not migrated |  |
| 910 | 2019-12-02 | [English] 아까 / 이따가 / 얼마전에 / 나중에 표현하기 | `english-아까-이따가-얼마전에-나중에-표현하기` | Not migrated |  |
| 912 | 2019-12-03 | [English] '마침' / '혹시' 표현 | `english-마침-혹시-표현` | Not migrated |  |
| 919 | 2019-12-05 | [English] 자연스러운 영어 구사를 위한 표현 | `english-자연스러운-영어-구사를-위한-표현` | Not migrated |  |
| 922 | 2019-12-09 | [English] 과거완료 시제 | `english-과거완료-시제` | Not migrated |  |
| 1002 | 2020-02-13 | [English] Basic 1 | `english-basic-1` | Not migrated |  |
| 1020 | 2020-02-24 | [English] Basic 2 | `english-basic-2` | Not migrated |  |
| 1079 | 2020-05-17 | [English] Basic 3 | `english-basic-3` | Not migrated |  |
| 1081 | 2020-05-18 | [English] Basic 4 | `english-basic-4` | Not migrated |  |
| 1917 | 2021-02-22 | [English] Basic 5 | `english-basic-5` | Not migrated |  |
| 1942 | 2021-03-11 | [English] Basic 6 | `english-basic-6` | Not migrated |  |
| 1948 | 2021-03-11 | [English] Basic 6 | `english-basic-6-2` | Not migrated |  |
| 1950 | 2021-03-13 | [English] Basic 7 | `english-basic-7` | Not migrated |  |
| 1953 | 2021-03-13 | [English] I like to V vs. I like V-ing | `english-i-like-to-v-vs-i-like-v-ing` | Not migrated |  |
| 1957 | 2021-03-14 | [English] Basic 8 | `english-basic-8` | Not migrated |  |
| 1963 | 2021-03-16 | [English] Basic 9 | `english-basic-9` | Not migrated |  |
| 1965 | 2021-03-17 | [English] Basic 10 | `english-basic-10` | Not migrated |  |
| 1967 | 2021-03-17 | [English] Basic 11 | `english-basic-11` | Not migrated |  |
| 1969 | 2021-03-17 | [English] Basic 12 | `english-basic-12` | Not migrated |  |
| 1971 | 2021-03-18 | [English] Basic 13 | `english-basic-13` | Not migrated |  |
| 1974 | 2021-03-21 | [English] Basic 14 | `english-basic-14` | Not migrated |  |
| 1976 | 2021-03-21 | [English] Basic 15 | `english-basic-15` | Not migrated |  |
| 2300 | 2021-08-12 | [English] by와 until 차이 | `english-by와-until-차이` | Not migrated |  |
| 2302 | 2021-08-12 | [English] for -ing 사용법 | `english-for-ing-사용법` | Not migrated |  |
| 2304 | 2021-08-12 | [English] 딴데로 / 딴걸로 표현법 | `english-딴데로-딴걸로-표현법` | Not migrated |  |
| 2348 | 2021-08-17 | [English] could have p.p | `english-could-have-p-p` | Not migrated |  |
| 2378 | 2021-08-30 | [English] must have, might have, couldn't have | `english-must-have-might-have-couldnt-have` | Not migrated |  |
| 2382 | 2021-09-01 | [English] look, look like | `english-look-look-like` | Not migrated |  |
| 2396 | 2021-09-05 | [English] 상관 있다 / 상관 없다 표현방법 | `english-상관-있다-상관-없다-표현방법` | Not migrated |  |
| 2399 | 2021-09-07 | [English] 일상적인 대화 | `english-일상적인-대화` | Not migrated |  |
| 2401 | 2021-09-08 | [English] might / will be V-ing | `english-might-will-be-v-ing` | Not migrated |  |
| 2403 | 2021-09-08 | [English] "아직"을 영어로 표현하는 유형 | `english-아직을-영어로-표현하는-유형` | Not migrated |  |
| 2407 | 2021-10-04 | [English] 일상적인 영어 말하기 1 | `english-일상적인-영어-말하기` | Not migrated |  |
| 2425 | 2021-10-19 | [English] 빈도부사 | `english-빈도부사` | Not migrated |  |
| 2432 | 2021-10-25 | [English] 이맘때쯤 / 연말에 가까워질 수록 | `english-이맘때쯤-연말에-가까워질-수록` | Not migrated |  |
| 2489 | 2021-11-29 | [English] 일상적인 영어 말하기 2 | `english-일상적인-영어-말하기-2` | Not migrated |  |
| 2491 | 2021-12-01 | [English] It's not that S + V it's just that | `english-its-not-that-s-v-its-just-that` | Not migrated |  |
| 2495 | 2021-12-02 | [English] 여러모로 / 어느정도 / 어떻게 보면 / Go With / ~라는 것은 없다 | `english-여러모로-어느정도-어떻게-보면-go-with-라는-것은-없` | Not migrated |  |
| 2509 | 2021-12-07 | [English] As ~ As 용법 | `english-be-as-형용사-as-용법` | Not migrated |  |
| 2521 | 2021-12-08 | [English] 연락하다 / 남다 / 이상한게 / 왠지 | `english-연락하다-남다-이상한게-왠지` | Not migrated |  |
| 2529 | 2021-12-16 | 괄호 영어로 표기법 (), {}, [], <> | `괄호-영어로-표기법` | Not migrated |  |
| 2540 | 2021-12-20 | [English] 숫자, 시간 영어로 표현하기 | `english-숫자-시간-영어로-표현하기` | Not migrated |  |
| 2545 | 2021-12-23 | [English] Used to 사용법 | `english-used-to-사용법` | Not migrated |  |
| 2562 | 2021-12-28 | [English] ~한지는 꽤 됐다 / ~한지 얼마 안됐다 | `english-한지는-꽤-됐다-한지-얼마-안됐다` | Not migrated |  |
| 2600 | 2022-01-23 | [English] 절반쯤 지나서 | `english-절반쯤-지나서` | Not migrated |  |
| 2607 | 2022-01-23 | [English] 다양한 ~가 있다 | `english-다양한-가-있다` | Not migrated |  |
| 2806 | 2022-02-14 | [English] ~할 자신이 없다 / 있다 | `english-할-자신이-없다-있다` | Not migrated |  |
| 2808 | 2022-02-14 | [English] ~할 가능성이 높다 / 낮다 | `english-할-가능성이-높다-낮다` | Not migrated |  |
| 2810 | 2022-02-16 | [English] 좋았던 것에 대한 표현 | `english-좋았던-것에-대한-표현` | Not migrated |  |
| 2812 | 2022-02-16 | [English] 결국 / 결국에는 | `english-결국-결국에는-표현법` | Not migrated |  |
| 2814 | 2022-02-17 | [English] (누구) 대신 / 대신에 ~를 해주다/하다 | `english-누구-대신-대신에-를-해주다-하다` | Not migrated |  |
| 2828 | 2022-02-23 | [English] 잘못하다 / 비난하다 | `english-잘못하다-비난하다` | Not migrated |  |
| 2965 | 2022-06-09 | [English] 돈이 들다 / 돈을 쓰다 / 돈을 내다 | `english-돈이-들다-돈을-쓰다-돈을-내다` | Not migrated |  |
| 2988 | 2022-07-07 | [English] even if / even though | `english-even-if-even-though` | Not migrated |  |
| 2993 | 2022-07-19 | [English] 딱히 / 의외로 / 아무렇지도 않게 / 어쩔 수 없이 / 점차 | `english-딱히-의외로-아무렇지도-않게-어쩔-수-없이` | Not migrated |  |
| 3016 | 2022-08-22 | [English] 비용 - 시간 - 번거로움 비교하기 | `english-비용-시간-번거로움-비교하기` | Not migrated |  |
| 3095 | 2022-10-10 | [English] 처음에는, 애초에, 먼저, ~하는게 처음이다 | `english-처음에는-에초에-먼저-하는게-처음이다` | Not migrated |  |
| 3109 | 2022-11-03 | [English] 전화 관련된 표현 | `english-전화-관련된-표현` | Not migrated |  |
| 3131 | 2022-11-22 | [English] 비례식 묘사 / 표현 | `english-비례식-묘사-표현` | Not migrated |  |
| 3144 | 2022-12-14 | [English] 코로나 관련 영어 표현 | `english-코로나-관련-영어-표현` | Not migrated |  |
| 3146 | 2022-12-25 | [English] 영어에서 완료시제 | `english-영어에서-완료시제` | Not migrated |  |
| 3154 | 2022-12-26 | [English] 관계절 | `english-관계절` | Not migrated |  |
| 3266 | 2023-03-08 | [English] 전화, 통화, 연락, 문자, Email 관련 표현 | `english-전화-통화-연락-문자-email-관련-표현` | Not migrated |  |
| 3269 | 2023-03-09 | [English] "저런 사람 처음 봐" 일상적으로 사용하는 극단적 표현 | `english-저런-사람-처음-봐-일상적으로-사용하는-극단적` | Not migrated |  |
| 3276 | 2023-03-14 | [English] "모르겠어" 영어 표현 | `english-모르겠어-영어-표현` | Not migrated |  |
| 3284 | 2023-03-23 | [English] "~하는 김에" / "어차피-이왕 ~ 하는거" / "부탁 좀 할게" 표현법 | `english-하는-김에-어차피-이왕-하는거-부탁-좀-할게-표` | Not migrated |  |
| 3289 | 2023-03-29 | [English] "한번에 하나씩" / "동시에 여러개" / "일일이 따로따로" / "순서대로" 표현법 | `english-한번에-하나씩-동시에-여러개-일일이-따로따로` | Not migrated |  |
| 3300 | 2023-04-06 | [English] 문장 속에 의문형 내용 포함시키는 표현 (간접의문문) | `english-문장-속에-의문형-내용-포함시키는-표현` | Not migrated |  |
| 3305 | 2023-04-19 | [English] 생활 필수 표현 - 긍정적인 생각을 말할 때 | `english-생활-필수-표현-긍정적인-생각을-말할-때` | Not migrated |  |
| 3308 | 2023-04-27 | [English] “~할거면 뭐하러 해?” / “~라고 해서 ~하면 안되는거야?” 표현법 | `english-할거면-뭐하러-해-라고-해서-하면-안되는` | Not migrated |  |
| 3312 | 2023-05-09 | [English] "쟤네 왜 저래?" / "별것도 아닌거 가지고 싸우다" / "원래 저랬어" 표현 | `english-쟤네-왜-저래-별것도-아닌거-가지고-싸우다-원` | Not migrated |  |
| 3316 | 2023-05-17 | [English] 전반적으로 / 아쉬움에 대한 표현 / 마땅한 결과 묘사 | `english-전반적으로-아쉬움에-대한-표현-마땅한-결과-묘사` | Not migrated |  |
| 3320 | 2023-05-25 | [English] 점심 식사 관련 영어 표현 | `english-점심-식사-관련-영어-표현` | Not migrated |  |
| 3322 | 2023-06-01 | [English] "말실수하다" / "말조심하다" 표현법 | `english-말실수하다-말을-잘못하다-말조심하다-표현법` | Not migrated |  |
| 3337 | 2023-06-12 | [English] The way things are | `english-the-way-things-are` | Not migrated |  |
| 3348 | 2023-06-15 | [English] "시키는 대로 하다" / "하라는 대로 하다" / "배운 대로 하다" / "늘 하던대로 하다" 표현법 | `english-시키는-대로-하다-하라는-대로-하다-배운-대로` | Not migrated |  |
| 3362 | 2023-06-22 | [English] Dialog 1 | `writing-1` | Not migrated |  |
| 3370 | 2023-07-07 | [English] 빈도 표현 방법 | `english-빈도-표현-방법` | Not migrated |  |
| 3377 | 2023-07-13 | [English] 영화를 보고 뭐가 좋았는지 설명할 때 사용하게 되는 여러가지 기본 표현 | `english-영화를-보고-뭐가-좋았는지-설명할-때-사용하게-되` | Not migrated |  |
| 3381 | 2023-07-13 | [English] Writing 2 | `english-writing-2` | Not migrated |  |
| 3387 | 2023-07-20 | [English] Writing 3 | `english-writing-3` | Not migrated |  |
| 3389 | 2023-07-24 | [English] Writing 4 | `english-writing-4` | Not migrated |  |
| 3445 | 2023-08-29 | [English] Definitely / Obvious(ly) / Noticeably | `english-definitely-obviously-noticeably` | Not migrated |  |
| 3451 | 2023-09-04 | [English] "어떤 선택을 하더라도", "아무리 노력을 해도", "어쩔수없이" 표현법 | `english-어떤-선택을-하더라도-아무리-노력을-해도-어쩔` | Not migrated |  |
| 3511 | 2023-10-17 | [English] "반드시" / "꼭" / "무조건" / "어떻게든" / "어떤 식으로든" / "무슨 수를 써서라도" - 표현 | `english-반드시-꼭-무조건-어떻게든-어떤-식으로든` | Not migrated |  |
| 3526 | 2023-12-04 | [English] "우선 먼저" / "그러고 나서" / "하고 나면" 표현 | `english-우선-먼저-그러고-나서-하고-나면-표현` | Not migrated |  |
| 3530 | 2023-12-12 | [Dialog] get 활용 - 1 | `dialog-get-활용-1` | Not migrated |  |
| 3534 | 2023-12-12 | [English] "내 말은" / "내 결론은" / "내가 하고 싶은 말은" 표현 방법 | `english-내-말은-내-결론은-내가-하고-싶은-말은-표현-방` | Not migrated |  |
| 3549 | 2024-03-25 | [English] Because / Since / Due to / In order to / So that 사용법 | `english-because-since-due-to-in-order-to-so-that-사용법` | Declined | [PR #3](https://github.com/shumin215/blog/pull/3)<br>[PR #1](https://github.com/shumin215/blog/pull/1) |

</details>

<details>
<summary>Fancy Expression ? total 87, migrated 0, declined 1, not migrated 86</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 757 | 2019-10-27 | [English] 당황하다 / 당황스럽다 | `english-당황하다-당황스럽다` | Not migrated |  |
| 764 | 2019-10-28 | [English] 생활 속 필수 표현 - 집편 | `english-생활-속-필수-표현-집편` | Not migrated |  |
| 791 | 2019-10-29 | [English] 영어로 인사하는 법 | `english-영어로-인사하는-법` | Not migrated |  |
| 813 | 2019-10-31 | [English] will / be going to 차이 | `english-will-be-going-to-차이` | Not migrated |  |
| 818 | 2019-11-04 | [English] have to / should / Be supposed to | `english-have-to-should-be-supposed-to` | Not migrated |  |
| 834 | 2019-11-04 | [English] 미안하다 | `english-미안하다` | Not migrated |  |
| 836 | 2019-11-06 | [English] 명절 맞이 표현 | `english-명절-맞이-표현` | Not migrated |  |
| 839 | 2019-11-07 | [English] find / look for / search | `english-find-look-for-search` | Not migrated |  |
| 856 | 2019-11-08 | [English] '알다'의 다양한 표현 | `english-알다의-다양한-표현` | Not migrated |  |
| 864 | 2019-11-09 | [English] would / could 사용법 | `english-would-could-사용법` | Not migrated |  |
| 873 | 2019-11-11 | [English] '오랜만에' 표현 | `english-오랜만에-표현` | Not migrated |  |
| 875 | 2019-11-12 | [English] if 가정법 - 1 | `english-if-가정법-1` | Not migrated |  |
| 879 | 2019-11-13 | [English] if 가정법 - 2 | `english-if-가정법-2` | Not migrated |  |
| 881 | 2019-11-13 | [English] if 가정법 - 3 | `english-if-가정법-3` | Not migrated |  |
| 886 | 2019-11-15 | [English] 원래 ~하려 했는데 / ~하게 됐다 | `english-원래-하려-했는데-하게-됐다` | Not migrated |  |
| 890 | 2019-11-17 | [English] '다행이다' 표현법 | `english-다행이다-표현법` | Not migrated |  |
| 892 | 2019-11-19 | [English] 교통수단에 대해 이야기 할 때 | `english-교통수단에-대해-이야기-할-때` | Not migrated |  |
| 895 | 2019-11-27 | [English] talk / speak / say / tell 구분 | `english-talk-speak-say-tell-구분` | Not migrated |  |
| 897 | 2019-11-28 | [English] be / get / become | `english-be-get-become` | Not migrated |  |
| 899 | 2019-11-30 | [English] 기대하다/ 기대되다 표현법 | `english-기대하다-기대되다-표현법` | Not migrated |  |
| 901 | 2019-12-01 | [English] '내가 알기로는' / '내가 듣기로는' 표현하기 | `english-내가-알기로는-내가-듣기로는-표현하기` | Not migrated |  |
| 910 | 2019-12-02 | [English] 아까 / 이따가 / 얼마전에 / 나중에 표현하기 | `english-아까-이따가-얼마전에-나중에-표현하기` | Not migrated |  |
| 912 | 2019-12-03 | [English] '마침' / '혹시' 표현 | `english-마침-혹시-표현` | Not migrated |  |
| 919 | 2019-12-05 | [English] 자연스러운 영어 구사를 위한 표현 | `english-자연스러운-영어-구사를-위한-표현` | Not migrated |  |
| 922 | 2019-12-09 | [English] 과거완료 시제 | `english-과거완료-시제` | Not migrated |  |
| 1953 | 2021-03-13 | [English] I like to V vs. I like V-ing | `english-i-like-to-v-vs-i-like-v-ing` | Not migrated |  |
| 2300 | 2021-08-12 | [English] by와 until 차이 | `english-by와-until-차이` | Not migrated |  |
| 2302 | 2021-08-12 | [English] for -ing 사용법 | `english-for-ing-사용법` | Not migrated |  |
| 2304 | 2021-08-12 | [English] 딴데로 / 딴걸로 표현법 | `english-딴데로-딴걸로-표현법` | Not migrated |  |
| 2348 | 2021-08-17 | [English] could have p.p | `english-could-have-p-p` | Not migrated |  |
| 2378 | 2021-08-30 | [English] must have, might have, couldn't have | `english-must-have-might-have-couldnt-have` | Not migrated |  |
| 2382 | 2021-09-01 | [English] look, look like | `english-look-look-like` | Not migrated |  |
| 2396 | 2021-09-05 | [English] 상관 있다 / 상관 없다 표현방법 | `english-상관-있다-상관-없다-표현방법` | Not migrated |  |
| 2399 | 2021-09-07 | [English] 일상적인 대화 | `english-일상적인-대화` | Not migrated |  |
| 2401 | 2021-09-08 | [English] might / will be V-ing | `english-might-will-be-v-ing` | Not migrated |  |
| 2403 | 2021-09-08 | [English] "아직"을 영어로 표현하는 유형 | `english-아직을-영어로-표현하는-유형` | Not migrated |  |
| 2407 | 2021-10-04 | [English] 일상적인 영어 말하기 1 | `english-일상적인-영어-말하기` | Not migrated |  |
| 2425 | 2021-10-19 | [English] 빈도부사 | `english-빈도부사` | Not migrated |  |
| 2432 | 2021-10-25 | [English] 이맘때쯤 / 연말에 가까워질 수록 | `english-이맘때쯤-연말에-가까워질-수록` | Not migrated |  |
| 2489 | 2021-11-29 | [English] 일상적인 영어 말하기 2 | `english-일상적인-영어-말하기-2` | Not migrated |  |
| 2491 | 2021-12-01 | [English] It's not that S + V it's just that | `english-its-not-that-s-v-its-just-that` | Not migrated |  |
| 2495 | 2021-12-02 | [English] 여러모로 / 어느정도 / 어떻게 보면 / Go With / ~라는 것은 없다 | `english-여러모로-어느정도-어떻게-보면-go-with-라는-것은-없` | Not migrated |  |
| 2509 | 2021-12-07 | [English] As ~ As 용법 | `english-be-as-형용사-as-용법` | Not migrated |  |
| 2521 | 2021-12-08 | [English] 연락하다 / 남다 / 이상한게 / 왠지 | `english-연락하다-남다-이상한게-왠지` | Not migrated |  |
| 2540 | 2021-12-20 | [English] 숫자, 시간 영어로 표현하기 | `english-숫자-시간-영어로-표현하기` | Not migrated |  |
| 2545 | 2021-12-23 | [English] Used to 사용법 | `english-used-to-사용법` | Not migrated |  |
| 2562 | 2021-12-28 | [English] ~한지는 꽤 됐다 / ~한지 얼마 안됐다 | `english-한지는-꽤-됐다-한지-얼마-안됐다` | Not migrated |  |
| 2600 | 2022-01-23 | [English] 절반쯤 지나서 | `english-절반쯤-지나서` | Not migrated |  |
| 2607 | 2022-01-23 | [English] 다양한 ~가 있다 | `english-다양한-가-있다` | Not migrated |  |
| 2806 | 2022-02-14 | [English] ~할 자신이 없다 / 있다 | `english-할-자신이-없다-있다` | Not migrated |  |
| 2808 | 2022-02-14 | [English] ~할 가능성이 높다 / 낮다 | `english-할-가능성이-높다-낮다` | Not migrated |  |
| 2810 | 2022-02-16 | [English] 좋았던 것에 대한 표현 | `english-좋았던-것에-대한-표현` | Not migrated |  |
| 2812 | 2022-02-16 | [English] 결국 / 결국에는 | `english-결국-결국에는-표현법` | Not migrated |  |
| 2814 | 2022-02-17 | [English] (누구) 대신 / 대신에 ~를 해주다/하다 | `english-누구-대신-대신에-를-해주다-하다` | Not migrated |  |
| 2828 | 2022-02-23 | [English] 잘못하다 / 비난하다 | `english-잘못하다-비난하다` | Not migrated |  |
| 2965 | 2022-06-09 | [English] 돈이 들다 / 돈을 쓰다 / 돈을 내다 | `english-돈이-들다-돈을-쓰다-돈을-내다` | Not migrated |  |
| 2988 | 2022-07-07 | [English] even if / even though | `english-even-if-even-though` | Not migrated |  |
| 2993 | 2022-07-19 | [English] 딱히 / 의외로 / 아무렇지도 않게 / 어쩔 수 없이 / 점차 | `english-딱히-의외로-아무렇지도-않게-어쩔-수-없이` | Not migrated |  |
| 3016 | 2022-08-22 | [English] 비용 - 시간 - 번거로움 비교하기 | `english-비용-시간-번거로움-비교하기` | Not migrated |  |
| 3095 | 2022-10-10 | [English] 처음에는, 애초에, 먼저, ~하는게 처음이다 | `english-처음에는-에초에-먼저-하는게-처음이다` | Not migrated |  |
| 3109 | 2022-11-03 | [English] 전화 관련된 표현 | `english-전화-관련된-표현` | Not migrated |  |
| 3131 | 2022-11-22 | [English] 비례식 묘사 / 표현 | `english-비례식-묘사-표현` | Not migrated |  |
| 3144 | 2022-12-14 | [English] 코로나 관련 영어 표현 | `english-코로나-관련-영어-표현` | Not migrated |  |
| 3146 | 2022-12-25 | [English] 영어에서 완료시제 | `english-영어에서-완료시제` | Not migrated |  |
| 3154 | 2022-12-26 | [English] 관계절 | `english-관계절` | Not migrated |  |
| 3266 | 2023-03-08 | [English] 전화, 통화, 연락, 문자, Email 관련 표현 | `english-전화-통화-연락-문자-email-관련-표현` | Not migrated |  |
| 3269 | 2023-03-09 | [English] "저런 사람 처음 봐" 일상적으로 사용하는 극단적 표현 | `english-저런-사람-처음-봐-일상적으로-사용하는-극단적` | Not migrated |  |
| 3276 | 2023-03-14 | [English] "모르겠어" 영어 표현 | `english-모르겠어-영어-표현` | Not migrated |  |
| 3284 | 2023-03-23 | [English] "~하는 김에" / "어차피-이왕 ~ 하는거" / "부탁 좀 할게" 표현법 | `english-하는-김에-어차피-이왕-하는거-부탁-좀-할게-표` | Not migrated |  |
| 3289 | 2023-03-29 | [English] "한번에 하나씩" / "동시에 여러개" / "일일이 따로따로" / "순서대로" 표현법 | `english-한번에-하나씩-동시에-여러개-일일이-따로따로` | Not migrated |  |
| 3300 | 2023-04-06 | [English] 문장 속에 의문형 내용 포함시키는 표현 (간접의문문) | `english-문장-속에-의문형-내용-포함시키는-표현` | Not migrated |  |
| 3305 | 2023-04-19 | [English] 생활 필수 표현 - 긍정적인 생각을 말할 때 | `english-생활-필수-표현-긍정적인-생각을-말할-때` | Not migrated |  |
| 3308 | 2023-04-27 | [English] “~할거면 뭐하러 해?” / “~라고 해서 ~하면 안되는거야?” 표현법 | `english-할거면-뭐하러-해-라고-해서-하면-안되는` | Not migrated |  |
| 3312 | 2023-05-09 | [English] "쟤네 왜 저래?" / "별것도 아닌거 가지고 싸우다" / "원래 저랬어" 표현 | `english-쟤네-왜-저래-별것도-아닌거-가지고-싸우다-원` | Not migrated |  |
| 3316 | 2023-05-17 | [English] 전반적으로 / 아쉬움에 대한 표현 / 마땅한 결과 묘사 | `english-전반적으로-아쉬움에-대한-표현-마땅한-결과-묘사` | Not migrated |  |
| 3320 | 2023-05-25 | [English] 점심 식사 관련 영어 표현 | `english-점심-식사-관련-영어-표현` | Not migrated |  |
| 3322 | 2023-06-01 | [English] "말실수하다" / "말조심하다" 표현법 | `english-말실수하다-말을-잘못하다-말조심하다-표현법` | Not migrated |  |
| 3337 | 2023-06-12 | [English] The way things are | `english-the-way-things-are` | Not migrated |  |
| 3348 | 2023-06-15 | [English] "시키는 대로 하다" / "하라는 대로 하다" / "배운 대로 하다" / "늘 하던대로 하다" 표현법 | `english-시키는-대로-하다-하라는-대로-하다-배운-대로` | Not migrated |  |
| 3370 | 2023-07-07 | [English] 빈도 표현 방법 | `english-빈도-표현-방법` | Not migrated |  |
| 3377 | 2023-07-13 | [English] 영화를 보고 뭐가 좋았는지 설명할 때 사용하게 되는 여러가지 기본 표현 | `english-영화를-보고-뭐가-좋았는지-설명할-때-사용하게-되` | Not migrated |  |
| 3445 | 2023-08-29 | [English] Definitely / Obvious(ly) / Noticeably | `english-definitely-obviously-noticeably` | Not migrated |  |
| 3451 | 2023-09-04 | [English] "어떤 선택을 하더라도", "아무리 노력을 해도", "어쩔수없이" 표현법 | `english-어떤-선택을-하더라도-아무리-노력을-해도-어쩔` | Not migrated |  |
| 3511 | 2023-10-17 | [English] "반드시" / "꼭" / "무조건" / "어떻게든" / "어떤 식으로든" / "무슨 수를 써서라도" - 표현 | `english-반드시-꼭-무조건-어떻게든-어떤-식으로든` | Not migrated |  |
| 3526 | 2023-12-04 | [English] "우선 먼저" / "그러고 나서" / "하고 나면" 표현 | `english-우선-먼저-그러고-나서-하고-나면-표현` | Not migrated |  |
| 3534 | 2023-12-12 | [English] "내 말은" / "내 결론은" / "내가 하고 싶은 말은" 표현 방법 | `english-내-말은-내-결론은-내가-하고-싶은-말은-표현-방` | Not migrated |  |
| 3549 | 2024-03-25 | [English] Because / Since / Due to / In order to / So that 사용법 | `english-because-since-due-to-in-order-to-so-that-사용법` | Declined | [PR #3](https://github.com/shumin215/blog/pull/3)<br>[PR #1](https://github.com/shumin215/blog/pull/1) |

</details>

<details>
<summary>Study ? total 60, migrated 0, declined 0, not migrated 60</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 937 | 2020-01-10 | [Paper Review] The Load Slice Core Microarchitecture | `paper-review-the-load-slice-core-microarchitecture` | Not migrated |  |
| 983 | 2020-02-12 | Analysis, Elaboration and Synthesis | `analysis-elaboration-and-synthesis` | Not migrated |  |
| 957 | 2020-02-13 | [Paper Review] Freeway: Maximizing MLP for Slice-Out-of-Order Execution | `paper-review-freeway-maximizing-mlp-for-slice-out-of-order-execution` | Not migrated |  |
| 1007 | 2020-02-16 | [Computer Arch.] Difference between CAM and Fully-associative Cache? | `difference-between-cam-and-fully-associative-cache` | Not migrated |  |
| 1386 | 2020-09-12 | SAIF Format | `saif-format` | Not migrated |  |
| 1422 | 2020-10-30 | 타입 의존성 제거 (Loose Coupling) | `타입-의존성-제거-loose-coupling` | Not migrated |  |
| 1437 | 2020-11-14 | [Algorithm] Generic Hash | `generic-hash` | Not migrated |  |
| 1456 | 2020-11-24 | [Digital Logic] Static Timing Analysis (STA) | `digital-logic-static-timing-analysis-sta` | Not migrated |  |
| 1451 | 2020-11-27 | [Algorithm] Generic Tree | `generic-tree` | Not migrated |  |
| 1471 | 2020-12-02 | Binary Search Tree | `binary-search-tree` | Not migrated |  |
| 1493 | 2020-12-20 | Red-Black Tree - 삽입 | `red-black-tree-삽입` | Not migrated |  |
| 1584 | 2021-01-02 | Red-Black Tree - 삭제 | `red-black-tree-삭제` | Not migrated |  |
| 1608 | 2021-01-02 | Red-Black Tree 개선된 구조 | `red-black-tree-개선된-구조` | Not migrated |  |
| 1612 | 2021-01-02 | 증강 트리 (Augmented Tree) | `증강-트리` | Not migrated |  |
| 1635 | 2021-01-03 | 간격 트리 (Interval Tree) | `간격-트리-interval-tree` | Not migrated |  |
| 1645 | 2021-01-04 | [Algorithm] Flexible Array | `flexible-array` | Not migrated |  |
| 1700 | 2021-01-08 | Full Coherency vs. IO Coherency | `full-coherency-vs-io-coherency` | Not migrated |  |
| 1718 | 2021-01-11 | [Algorithm] Pattern Matching | `algorithm-pattern-matching` | Not migrated |  |
| 1738 | 2021-01-13 | [Algorithm] Knuth-Morris-Pratt (KMP) 알고리즘 | `algorithm-morris-pratt-패턴-매칭` | Not migrated |  |
| 1765 | 2021-01-14 | [Digital Logic] Timing Violation 해결 방법 | `digital-logic-timing-violation-해결-방법` | Not migrated |  |
| 1821 | 2021-01-17 | [Algorithm] Generic Swap and Sort | `algorithm-generic-swap-and-sort` | Not migrated |  |
| 1824 | 2021-01-18 | [Algorithm] Find First Set (FFS) Bit | `algorithm-find-first-set-ffs-bit` | Not migrated |  |
| 1843 | 2021-01-19 | [Algorithm] Hamming Weight (Bit Count) | `algorithm-hamming-weight-bit-count` | Not migrated |  |
| 1866 | 2021-01-21 | [Algorithm] Parity Bit | `algorithm-parity-bit` | Not migrated |  |
| 1871 | 2021-01-21 | [Algorithm] Check Sum | `algorithm-check-sum` | Not migrated |  |
| 1880 | 2021-01-21 | [Algorithm] Cyclic Redundancy Check (CRC) | `algorithm-cyclic-redundancy-check-crc` | Not migrated |  |
| 1996 | 2021-04-04 | [OS] Linux 소개 | `os-linux-소개` | Not migrated |  |
| 1998 | 2021-04-04 | [Compiler] GCC Compiler | `compiler-gcc-compiler` | Not migrated |  |
| 2020 | 2021-04-11 | [OS] Linux File System | `os-linux-file-system` | Not migrated |  |
| 2028 | 2021-04-12 | [Computer Arch.] False Sharing | `comp-arch-false-sharing` | Not migrated |  |
| 2031 | 2021-04-12 | [Linux] 표준 입출력 (stdin, stdout, stderr) | `linux-표준-입출력-stdin-stdout-stderr` | Not migrated |  |
| 2148 | 2021-04-23 | [OS] fork: Process 생성 및 종료 | `os-fork-process-생성-및-종료` | Not migrated |  |
| 2196 | 2021-04-25 | [OS] Daemon Process | `os-daemon-process` | Not migrated |  |
| 2217 | 2021-04-25 | [OS] Process Synchronization | `os-deadlock-mutex` | Not migrated |  |
| 2234 | 2021-04-26 | [OS] Signal 동작 | `os-signal-동작` | Not migrated |  |
| 2237 | 2021-04-26 | [OS] SIGALRM 동작 | `os-sigalrm-동작` | Not migrated |  |
| 2244 | 2021-04-27 | [OS] Pipe | `os-pipe` | Not migrated |  |
| 2255 | 2021-04-29 | [OS] Message Queue | `os-message-queue` | Not migrated |  |
| 2290 | 2021-08-05 | [Computer Arch.] Endian | `computer-arch-endian` | Not migrated |  |
| 2570 | 2021-12-28 | [Digital Logic] RTL Deisgn Code Reference | `digital-logic-rtl-deisgn-code-reference` | Not migrated |  |
| 2613 | 2022-01-31 | [Computer Arch.] Arithmetic Shift / Logical Shift | `computer-arch-arithmetic-shift-logical-shift` | Not migrated |  |
| 2622 | 2022-01-31 | [Computer Arch.] Cache 종류 | `computer-arch-cache-종류` | Not migrated |  |
| 2631 | 2022-01-31 | [Computer Arch.] Cache Miss 원인 | `computer-arch-cache-miss-원인` | Not migrated |  |
| 2639 | 2022-01-31 | [Computer Arch.] TLB / Page Table | `computer-arch-tlb-page-table` | Not migrated |  |
| 2653 | 2022-02-01 | [Digital Logic] Difference between Mealy Machine and Moore Machine | `digital-logic-difference-between-mealy-machine-and-moore-machine` | Not migrated |  |
| 2665 | 2022-02-01 | [Computer Arch.] Carry and Overflow 차이 | `computer-arch-carry-and-overflow-차이` | Not migrated |  |
| 2687 | 2022-02-01 | [Digital Logic] Synchronizer Techniques for Multi-clock Domain SoCs & FPGAs | `digital-logic-synchronizer-techniques-for-multi-clock-domain-socs-fpgas` | Not migrated |  |
| 2689 | 2022-02-01 | [Computer Arch.] Floating Point Representation | `computer-arch-floating-point-representation` | Not migrated |  |
| 2710 | 2022-02-02 | [OS] Process / Thread Scheduling | `os-process-thread-scheduling` | Not migrated |  |
| 2719 | 2022-02-02 | [OS] Memory Allocation Strategies | `os-memory-allocation-strategies` | Not migrated |  |
| 2730 | 2022-02-02 | [OS] Deadlock | `os-deadlock` | Not migrated |  |
| 2740 | 2022-02-02 | [OS] Process vs. Thread | `os-process-vs-thread` | Not migrated |  |
| 2755 | 2022-02-03 | [Digital Logic] Clock Gating 관련 용어 | `digital-logic-clock-gating-관련-용어` | Not migrated |  |
| 2770 | 2022-02-03 | [OS] Memory Layout of C Program | `os-memory-layout-of-c-program` | Not migrated |  |
| 2775 | 2022-02-05 | [Compiler] Compiler Pipeline 구성 | `compiler-compiler-pipeline-구성` | Not migrated |  |
| 2822 | 2022-02-23 | [Computer Architecture] rep; ret Instruction for x86-64 | `computer-architecture-rep-ret-instruction-for-x86-64` | Not migrated |  |
| 2847 | 2022-03-09 | [Computer Arch.] x86 Flags (Condition Code) & Registers | `computer-arch-x86-flags-condition-code` | Not migrated |  |
| 3206 | 2023-01-12 | [Algorithm] Kruskal's Algorithm | `algorithm-kruskals-algorithm` | Not migrated |  |
| 3222 | 2023-01-17 | [Algorithm] Union-Find Algorithm | `algorithm-union-find-알고리즘` | Not migrated |  |
| 3233 | 2023-02-12 | [Algorithm] Dijkstra Algorithm | `algorithm-dijkstra-algorithm` | Not migrated |  |

</details>

<details>
<summary>Python ? total 44, migrated 0, declined 0, not migrated 44</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1085 | 2020-07-10 | [Python] 함수의 특징 - 1 | `python-함수의-의미` | Not migrated |  |
| 1097 | 2020-07-16 | [Python] 함수의 특징 - 2 | `python-함수의-특징` | Not migrated |  |
| 1110 | 2020-07-16 | [Python] Nested Function | `python-nested-function` | Not migrated |  |
| 1112 | 2020-07-16 | [Python] Lambda Function | `python-lambda-function` | Not migrated |  |
| 1120 | 2020-07-16 | [Python] 함수 Metadata | `python-함수-metadata` | Not migrated |  |
| 1123 | 2020-07-16 | [Python] Closure | `python-closure` | Not migrated |  |
| 1127 | 2020-07-17 | [Python] Decorator | `python-decorator` | Not migrated |  |
| 1129 | 2020-07-17 | [Python] Iterator | `python-iterator` | Not migrated |  |
| 1136 | 2020-07-17 | [Python] Generator | `python-generator` | Not migrated |  |
| 1151 | 2020-07-17 | [Python] dropwhile | `python-dropwhile` | Not migrated |  |
| 1155 | 2020-07-17 | [Python] zip, zip_longest | `python-zip-zip_longest` | Not migrated |  |
| 1157 | 2020-07-17 | [Python] Coroutine | `python-coroutine` | Not migrated |  |
| 1163 | 2020-07-17 | [Python] Special Function | `python-instance-문자열-표현식` | Not migrated |  |
| 1176 | 2020-07-17 | [Python] Property | `python-property` | Not migrated |  |
| 1181 | 2020-07-18 | [Python] Override | `python-override` | Not migrated |  |
| 1183 | 2020-07-18 | [Python] Proxy Design Pattern | `python-proxy-design-pattern` | Not migrated |  |
| 1187 | 2020-07-18 | [Python] 다중 상속, MRO | `python-다중-상속` | Not migrated |  |
| 1191 | 2020-07-18 | [Python] Property Extension | `python-property-extension` | Not migrated |  |
| 1264 | 2020-07-27 | [Python] SSLError | `python-sslerror` | Not migrated |  |
| 1267 | 2020-07-27 | [Python] Web Page HTML 확인 | `python-web-page-html-확인` | Not migrated |  |
| 1269 | 2020-07-27 | [Python] BeautifulSoup | `python-beautifulsoup` | Not migrated |  |
| 1272 | 2020-07-27 | [Python] 구글 뉴스 클리핑 | `python-구글-뉴스-클리핑` | Not migrated |  |
| 1280 | 2020-07-27 | [Python] Selenium | `python-selenium` | Not migrated |  |
| 1334 | 2020-07-29 | [Python] Multi-Thread Queue Polling | `python-multi-thread-queue-polling` | Not migrated |  |
| 1342 | 2020-07-29 | [Python] PyQt | `python-pyqt` | Not migrated |  |
| 1352 | 2020-07-30 | [Python] PyQt Widget | `python-pyqt-widget` | Not migrated |  |
| 1359 | 2020-07-30 | [Python] PyQt - Layout | `python-pyqt-layout` | Not migrated |  |
| 1363 | 2020-07-30 | [Python] PyQt - QThread (OTP Program) | `python-pyqt-qthread-otp-program` | Not migrated |  |
| 1370 | 2020-07-30 | [Python] PyQt - 계산기 만들기 | `python-pyqt-계산기-만들기` | Not migrated |  |
| 1376 | 2020-07-31 | [Python] Google Search Trend | `python-google-search-trend` | Not migrated |  |
| 2132 | 2021-04-19 | [Python] Python Open Source Project | `python-python-open-source-project` | Not migrated |  |
| 2263 | 2021-05-03 | [Python] UnicodeEncodeError: ‘ascii’ codec can’t encode character | `python-unicodeencodeerror-ascii-codec-cant-encode-character` | Not migrated |  |
| 2282 | 2021-07-23 | [Python] Coding Convention (PEP 8) | `python-coding-convention-pep-8` | Not migrated |  |
| 2390 | 2021-09-05 | [Python] 정규 표현식 (Regular Expression) | `python-정규-표현식-regular-expression` | Not migrated |  |
| 2414 | 2021-10-12 | [Python] Graph 그리기 (Matplotlib) | `python-graph-그리기-matplotlib` | Not migrated |  |
| 2419 | 2021-10-13 | [Python] Graph 그리기 (Pandas) | `python-graph-그리기-pandas` | Not migrated |  |
| 2456 | 2021-11-15 | [Python] pip Install 시 SSLError | `python-pip-install-시-sslerror` | Not migrated |  |
| 2475 | 2021-11-19 | [Python] JSON 파일 활용 | `python-json-파일-활용` | Not migrated |  |
| 2836 | 2022-03-03 | [Python] Python 및 Pip Package 설치 경로 확인 | `python-python-및-pip-package-설치-경로-확인` | Not migrated |  |
| 3140 | 2022-11-30 | [Python] 다른 Python Source의 모듈 가져오기 | `python-다른-python-source의-모듈-가져오기` | Not migrated |  |
| 3142 | 2022-11-30 | [Python] Cannot Split, A bytes-like object is required, not 'str' | `python-cannot-split-a-bytes-like-object-is-required-not-str` | Not migrated |  |
| 3470 | 2023-10-10 | [Python] glob Module 사용법 | `python-glob-module-사용법` | Not migrated |  |
| 3472 | 2023-10-11 | [Python] Pandas DataFrame 간단한 사용법 | `python-pandas-dataframe-간단한-사용법` | Not migrated |  |
| 3501 | 2023-10-14 | [Python] Xlwings 사용법 | `python-xlwings-사용법` | Not migrated |  |

</details>

<details>
<summary>Linux ? total 37, migrated 0, declined 0, not migrated 37</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 770 | 2019-10-29 | [Linux] Terminal 단축키 | `linux-terminal-단축키` | Not migrated |  |
| 848 | 2019-11-08 | [Linux]  grep 명령어 | `linux-grep-명령어` | Not migrated |  |
| 1039 | 2020-03-30 | tmux 설치 | `tmux-설치` | Not migrated |  |
| 1389 | 2020-09-14 | [Linux] diff: 두 디렉토리에 각 파일 비교 | `linux-diff-두-디렉토리에-각-파일-비교` | Not migrated |  |
| 1393 | 2020-09-23 | [Linux] make: 'test' is up to date | `linux-make-test-is-up-to-date` | Not migrated |  |
| 2002 | 2021-04-07 | [Linux] GDB 소개 | `linux-gdb` | Not migrated |  |
| 2010 | 2021-04-08 | [Linux] Makefile 소개 | `linux-makefile` | Not migrated |  |
| 2023 | 2021-04-11 | man No manual entry for [Command] | `man-no-manual-entry-for-command` | Not migrated |  |
| 2025 | 2021-04-11 | [Linux] 파일 입출력 함수 (fopen / fgetc / fputc / fclose / fgets / fputs / fread / fwrite) | `linux-파일-입출력-함수-fopen-fgetc-fputc-fclose` | Not migrated |  |
| 2050 | 2021-04-13 | [Linux] wc 명령어 구현 | `linux-wc-명령어-구현` | Not migrated |  |
| 2054 | 2021-04-13 | [Linux] cp 명령어 구현 | `linux-cp-명령어-구현` | Not migrated |  |
| 2057 | 2021-04-14 | [Linux] fseek / ftell 함수 | `linux-fseek-ftell-함수` | Not migrated |  |
| 2086 | 2021-04-17 | [Linux] Manual Section Number 의미 | `linux-manual-section-number-의미` | Not migrated |  |
| 2111 | 2021-04-18 | [Linux] 명령어 Option 추출 함수 (getopt) | `linux-명령어-option-추출-함수-getopt` | Not migrated |  |
| 2173 | 2021-04-24 | [Linux] wait() System Call 함수 | `linux-wait-system-call-함수` | Not migrated |  |
| 2183 | 2021-04-25 | [Linux] exec 계열 함수 | `linux-exec-계열-함수` | Not migrated |  |
| 2200 | 2021-04-25 | [Linux] Pthread 개념 (pthread_create / pthread_join / pthread_exit) | `linux-pthread-개념` | Not migrated |  |
| 2230 | 2021-04-25 | [Linux] readline 구현 | `linux-readline-구현` | Not migrated |  |
| 2287 | 2021-08-05 | [Linux] Ubuntu (64-Bit) 에 32-Bit Library Install | `linux-ubuntu-64-bit-에-32-bit-library-install` | Not migrated |  |
| 2294 | 2021-08-05 | [Linux] NASM 사용법 | `assembly-nasm-사용법` | Not migrated |  |
| 2336 | 2021-08-16 | [Linux] ptrace | `linux-ptrace` | Not migrated |  |
| 2338 | 2021-08-16 | [Linux] strace | `linux-strace` | Not migrated |  |
| 2343 | 2021-08-16 | [Linux] strace Terminal Session 붙이기 | `linux-strace-terminal-session-붙이기` | Not migrated |  |
| 2353 | 2021-08-20 | [Linux] strace 사용법 | `linux-strace-사용법` | Not migrated |  |
| 2370 | 2021-08-22 | [Linux] uftrace 설치 및 사용법 | `linux-uftrace-설치-및-사용법` | Not migrated |  |
| 2594 | 2022-01-06 | [Linux] Screen 사용법 | `linux-screen-사용법` | Not migrated |  |
| 2598 | 2022-01-08 | [Linux] update-alternatives: Ubuntu Package Version 관리 | `linux-update-alternatives-ubuntu-package-version-관리` | Not migrated |  |
| 2834 | 2022-03-02 | [Linux] Binary GLIBC Version Check | `linux-binary-glibc-version-check` | Not migrated |  |
| 2946 | 2022-04-20 | [Linux] Slurm 사용법 | `linux-slurm-사용법` | Not migrated |  |
| 2975 | 2022-06-30 | [Linux] tmux 사용법 | `linux-tmux-사용법` | Not migrated |  |
| 3027 | 2022-08-24 | [Linux] LSF 사용법 | `linux-lsf-사용법` | Not migrated |  |
| 3052 | 2022-09-02 | [Linux] Bash Shell 특정 패턴 문자 제외 | `linux-bash-shell-특정-패턴-문자-제외` | Not migrated |  |
| 3093 | 2022-09-30 | [Linux] Bash set 명령어 | `linux-bash-set-명령어` | Not migrated |  |
| 3106 | 2022-10-28 | [Linux] Executable의 RPATH 확인 | `linux-executable의-rpath-확인` | Not migrated |  |
| 3135 | 2022-11-22 | [Linux] GDB Variable 출력 형태 바꾸기 / C++ STL Print | `linux-gdb-variable-출력-형태-바꾸기` | Not migrated |  |
| 3167 | 2022-12-27 | [Linux] Shell: $* vs. $@ | `linux-shell-vs` | Not migrated |  |
| 3170 | 2022-12-27 | [Linux] Redirection (2>&1) | `linux-redirection-21` | Not migrated |  |

</details>

<details>
<summary>Git ? total 31, migrated 0, declined 0, not migrated 31</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1030 | 2020-03-17 | [Git] 파일 이름 변경 또는 삭제 후 로컬 저장소에 반영하기 | `git-파일-이름-변경-또는-삭제-후-로컬-저장소에-반영하` | Not migrated |  |
| 1033 | 2020-03-17 | [Git] Add 명령어 | `git-git-add` | Not migrated |  |
| 1035 | 2020-03-17 | [Git] Push하지 않은 Commit 되돌리기 | `git-push하지-않은-commit-되돌리기` | Not migrated |  |
| 1046 | 2020-04-06 | [Git] Branch 명령어 | `git-branch-가져오기` | Not migrated |  |
| 1054 | 2020-04-07 | [Git] Remote 명령어 | `git-remote-명령어` | Not migrated |  |
| 1418 | 2020-10-24 | [Git] fatal: failed to write object | `git-fatal-failed-to-write-object` | Not migrated |  |
| 1740 | 2021-01-12 | [Git] .gitignore 설정 | `git-gitignore-설정` | Not migrated |  |
| 1743 | 2021-01-12 | [Git] Repository 생성 및 연결 | `git-repository-생성-및-연결` | Not migrated |  |
| 1978 | 2021-03-27 | [Git] Reset 수행 후 복구 방법 | `git-reset-수행-후-복구-방법` | Not migrated |  |
| 1980 | 2021-03-27 | [Git] Revert: Repository에 Push한 Commit 되돌리기 | `git-revert-repository에-push한-commit-되돌리기` | Not migrated |  |
| 2269 | 2021-05-25 | [Git] fatal: refusing to merge unrelated histories | `git-fatal-refusing-to-merge-unrelated-histories` | Not migrated |  |
| 2277 | 2021-07-12 | [Git] Repository에 올라온 파일 삭제 (git rm) | `git-repository에-올라온-파일-삭제-git-rm` | Not migrated |  |
| 2280 | 2021-07-22 | [Git] 로컬 저장소에 Branch를 다른 원격 저장소의 다른 이름의 Branch로 Push | `git-로컬-저장소에-branch를-다른-원격-저장소의-다른-이름의` | Not migrated |  |
| 2374 | 2021-08-23 | [Git] Commit간 변경된 파일 목록 조회 (git diff) | `git-commit간-변경된-파일-목록-조회` | Not migrated |  |
| 2442 | 2021-11-05 | [Git] Repository의 Branch 로컬 저장소로 가져오기 | `git-repository의-branch-로컬-저장소로-가져오기` | Not migrated |  |
| 2446 | 2021-11-05 | [Git] Repository의 Branch 삭제 | `git-repository의-branch-삭제` | Not migrated |  |
| 2448 | 2021-11-12 | [Git] 특정 파일 Add 취소 | `git-특정-파일-add-취소` | Not migrated |  |
| 2450 | 2021-11-12 | [Git] 특정 Commit 시점으로 이동 - Checkout | `git-특정-commit-시점으로-이동-checkout` | Not migrated |  |
| 2944 | 2022-04-18 | [Git] Github Access Token 입력 생략하기 | `git-github-access-token-입력-생략하기` | Not migrated |  |
| 2970 | 2022-06-28 | [Git] Rebase 사용법 | `git-rebase-사용법` | Not migrated |  |
| 3014 | 2022-08-16 | [Git] Submodule 추가 | `git-submodule-추가` | Not migrated |  |
| 3034 | 2022-08-29 | [Git] fetch 사용법 | `git-fetch-사용법` | Not migrated |  |
| 3037 | 2022-08-29 | [Git] show 명령어 | `git-git-show-commit-정보-탐색` | Not migrated |  |
| 3041 | 2022-08-29 | [Git] clone --bare vs. --mirror 차이 | `git-clone-bare-vs-mirror-차이` | Not migrated |  |
| 3046 | 2022-08-30 | [Git] 특정 Commit 가져오기 (Cherry-Pick) | `git-특정-commit-가져오기-cherry-pick` | Not migrated |  |
| 3059 | 2022-09-02 | [Git] rm 명령어 옵션 | `git-rm-명령어-옵션` | Not migrated |  |
| 3064 | 2022-09-02 | [Git] Commit History에서 크기가 가장 큰 파일 찾기 | `git-commit-history에서-크기가-가장-큰-파일-찾기` | Not migrated |  |
| 3066 | 2022-09-05 | [Git] Github Action 사용법 | `git-github-action-사용법` | Not migrated |  |
| 3078 | 2022-09-05 | [Git] Github Action Workflow 작성법 | `git-github-action-workflow-작성법` | Not migrated |  |
| 3181 | 2022-12-29 | [Git] Tag 추가, 변경, 삭제, 검색, 비교, Checkout, Push | `git-tag-추가-변경-삭제-검색-비교-checkout-push` | Not migrated |  |
| 3449 | 2023-09-04 | [Git] Linear History with Foxtrot Merge | `git-linear-history-with-foxtrot-merge` | Not migrated |  |

</details>

<details>
<summary>Algorithm ? total 21, migrated 0, declined 0, not migrated 21</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1422 | 2020-10-30 | 타입 의존성 제거 (Loose Coupling) | `타입-의존성-제거-loose-coupling` | Not migrated |  |
| 1437 | 2020-11-14 | [Algorithm] Generic Hash | `generic-hash` | Not migrated |  |
| 1451 | 2020-11-27 | [Algorithm] Generic Tree | `generic-tree` | Not migrated |  |
| 1471 | 2020-12-02 | Binary Search Tree | `binary-search-tree` | Not migrated |  |
| 1493 | 2020-12-20 | Red-Black Tree - 삽입 | `red-black-tree-삽입` | Not migrated |  |
| 1584 | 2021-01-02 | Red-Black Tree - 삭제 | `red-black-tree-삭제` | Not migrated |  |
| 1608 | 2021-01-02 | Red-Black Tree 개선된 구조 | `red-black-tree-개선된-구조` | Not migrated |  |
| 1612 | 2021-01-02 | 증강 트리 (Augmented Tree) | `증강-트리` | Not migrated |  |
| 1635 | 2021-01-03 | 간격 트리 (Interval Tree) | `간격-트리-interval-tree` | Not migrated |  |
| 1645 | 2021-01-04 | [Algorithm] Flexible Array | `flexible-array` | Not migrated |  |
| 1718 | 2021-01-11 | [Algorithm] Pattern Matching | `algorithm-pattern-matching` | Not migrated |  |
| 1738 | 2021-01-13 | [Algorithm] Knuth-Morris-Pratt (KMP) 알고리즘 | `algorithm-morris-pratt-패턴-매칭` | Not migrated |  |
| 1821 | 2021-01-17 | [Algorithm] Generic Swap and Sort | `algorithm-generic-swap-and-sort` | Not migrated |  |
| 1824 | 2021-01-18 | [Algorithm] Find First Set (FFS) Bit | `algorithm-find-first-set-ffs-bit` | Not migrated |  |
| 1843 | 2021-01-19 | [Algorithm] Hamming Weight (Bit Count) | `algorithm-hamming-weight-bit-count` | Not migrated |  |
| 1866 | 2021-01-21 | [Algorithm] Parity Bit | `algorithm-parity-bit` | Not migrated |  |
| 1871 | 2021-01-21 | [Algorithm] Check Sum | `algorithm-check-sum` | Not migrated |  |
| 1880 | 2021-01-21 | [Algorithm] Cyclic Redundancy Check (CRC) | `algorithm-cyclic-redundancy-check-crc` | Not migrated |  |
| 3206 | 2023-01-12 | [Algorithm] Kruskal's Algorithm | `algorithm-kruskals-algorithm` | Not migrated |  |
| 3222 | 2023-01-17 | [Algorithm] Union-Find Algorithm | `algorithm-union-find-알고리즘` | Not migrated |  |
| 3233 | 2023-02-12 | [Algorithm] Dijkstra Algorithm | `algorithm-dijkstra-algorithm` | Not migrated |  |

</details>

<details>
<summary>English Basic ? total 16, migrated 0, declined 0, not migrated 16</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1002 | 2020-02-13 | [English] Basic 1 | `english-basic-1` | Not migrated |  |
| 1020 | 2020-02-24 | [English] Basic 2 | `english-basic-2` | Not migrated |  |
| 1079 | 2020-05-17 | [English] Basic 3 | `english-basic-3` | Not migrated |  |
| 1081 | 2020-05-18 | [English] Basic 4 | `english-basic-4` | Not migrated |  |
| 1917 | 2021-02-22 | [English] Basic 5 | `english-basic-5` | Not migrated |  |
| 1942 | 2021-03-11 | [English] Basic 6 | `english-basic-6` | Not migrated |  |
| 1948 | 2021-03-11 | [English] Basic 6 | `english-basic-6-2` | Not migrated |  |
| 1950 | 2021-03-13 | [English] Basic 7 | `english-basic-7` | Not migrated |  |
| 1957 | 2021-03-14 | [English] Basic 8 | `english-basic-8` | Not migrated |  |
| 1963 | 2021-03-16 | [English] Basic 9 | `english-basic-9` | Not migrated |  |
| 1965 | 2021-03-17 | [English] Basic 10 | `english-basic-10` | Not migrated |  |
| 1967 | 2021-03-17 | [English] Basic 11 | `english-basic-11` | Not migrated |  |
| 1969 | 2021-03-17 | [English] Basic 12 | `english-basic-12` | Not migrated |  |
| 1971 | 2021-03-18 | [English] Basic 13 | `english-basic-13` | Not migrated |  |
| 1974 | 2021-03-21 | [English] Basic 14 | `english-basic-14` | Not migrated |  |
| 1976 | 2021-03-21 | [English] Basic 15 | `english-basic-15` | Not migrated |  |

</details>

<details>
<summary>OS ? total 15, migrated 0, declined 0, not migrated 15</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1996 | 2021-04-04 | [OS] Linux 소개 | `os-linux-소개` | Not migrated |  |
| 2020 | 2021-04-11 | [OS] Linux File System | `os-linux-file-system` | Not migrated |  |
| 2031 | 2021-04-12 | [Linux] 표준 입출력 (stdin, stdout, stderr) | `linux-표준-입출력-stdin-stdout-stderr` | Not migrated |  |
| 2148 | 2021-04-23 | [OS] fork: Process 생성 및 종료 | `os-fork-process-생성-및-종료` | Not migrated |  |
| 2196 | 2021-04-25 | [OS] Daemon Process | `os-daemon-process` | Not migrated |  |
| 2217 | 2021-04-25 | [OS] Process Synchronization | `os-deadlock-mutex` | Not migrated |  |
| 2234 | 2021-04-26 | [OS] Signal 동작 | `os-signal-동작` | Not migrated |  |
| 2237 | 2021-04-26 | [OS] SIGALRM 동작 | `os-sigalrm-동작` | Not migrated |  |
| 2244 | 2021-04-27 | [OS] Pipe | `os-pipe` | Not migrated |  |
| 2255 | 2021-04-29 | [OS] Message Queue | `os-message-queue` | Not migrated |  |
| 2710 | 2022-02-02 | [OS] Process / Thread Scheduling | `os-process-thread-scheduling` | Not migrated |  |
| 2719 | 2022-02-02 | [OS] Memory Allocation Strategies | `os-memory-allocation-strategies` | Not migrated |  |
| 2730 | 2022-02-02 | [OS] Deadlock | `os-deadlock` | Not migrated |  |
| 2740 | 2022-02-02 | [OS] Process vs. Thread | `os-process-vs-thread` | Not migrated |  |
| 2770 | 2022-02-03 | [OS] Memory Layout of C Program | `os-memory-layout-of-c-program` | Not migrated |  |

</details>

<details>
<summary>Computer Architecture ? total 13, migrated 0, declined 0, not migrated 13</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 937 | 2020-01-10 | [Paper Review] The Load Slice Core Microarchitecture | `paper-review-the-load-slice-core-microarchitecture` | Not migrated |  |
| 957 | 2020-02-13 | [Paper Review] Freeway: Maximizing MLP for Slice-Out-of-Order Execution | `paper-review-freeway-maximizing-mlp-for-slice-out-of-order-execution` | Not migrated |  |
| 1007 | 2020-02-16 | [Computer Arch.] Difference between CAM and Fully-associative Cache? | `difference-between-cam-and-fully-associative-cache` | Not migrated |  |
| 2028 | 2021-04-12 | [Computer Arch.] False Sharing | `comp-arch-false-sharing` | Not migrated |  |
| 2290 | 2021-08-05 | [Computer Arch.] Endian | `computer-arch-endian` | Not migrated |  |
| 2613 | 2022-01-31 | [Computer Arch.] Arithmetic Shift / Logical Shift | `computer-arch-arithmetic-shift-logical-shift` | Not migrated |  |
| 2622 | 2022-01-31 | [Computer Arch.] Cache 종류 | `computer-arch-cache-종류` | Not migrated |  |
| 2631 | 2022-01-31 | [Computer Arch.] Cache Miss 원인 | `computer-arch-cache-miss-원인` | Not migrated |  |
| 2639 | 2022-01-31 | [Computer Arch.] TLB / Page Table | `computer-arch-tlb-page-table` | Not migrated |  |
| 2665 | 2022-02-01 | [Computer Arch.] Carry and Overflow 차이 | `computer-arch-carry-and-overflow-차이` | Not migrated |  |
| 2689 | 2022-02-01 | [Computer Arch.] Floating Point Representation | `computer-arch-floating-point-representation` | Not migrated |  |
| 2822 | 2022-02-23 | [Computer Architecture] rep; ret Instruction for x86-64 | `computer-architecture-rep-ret-instruction-for-x86-64` | Not migrated |  |
| 2847 | 2022-03-09 | [Computer Arch.] x86 Flags (Condition Code) & Registers | `computer-arch-x86-flags-condition-code` | Not migrated |  |

</details>

<details>
<summary>Persnal ? total 12, migrated 0, declined 0, not migrated 12</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 903 | 2019-12-02 | [Book] Atomic Habits | `book-atomic-habits` | Not migrated |  |
| 1061 | 2020-04-15 | [맛집] 세상의 모든 아침 광교점 | `후기-세상의-모든-아침-음식점` | Not migrated |  |
| 1894 | 2021-01-25 | 아파트 분양에 필요한 금액 | `아파트-분양에-필요한-금액` | Not migrated |  |
| 1903 | 2021-01-27 | 지역주택종합 (지주택) 이란 | `지역주택종합-지주택-이란` | Not migrated |  |
| 1911 | 2021-02-12 | 임대주택 종류 | `임대주택-종류` | Not migrated |  |
| 1983 | 2021-03-28 | [부동산] 청약 정보 Tip | `청약-정보-tip` | Not migrated |  |
| 2452 | 2021-11-14 | "오늘부터 개발자" 책 리뷰 | `오늘부터-개발자-책-리뷰` | Not migrated |  |
| 2573 | 2022-01-02 | [부동산] 3기 신도시 사전청약 요약 | `부동산-3기-신도시-사전청약-요약` | Not migrated |  |
| 2586 | 2022-01-06 | [부동산] 신혼부부 특별공급 / 생애최초 특별공급 (2021년 기준) | `부동산-신혼부부-특별공급-생애최초-특별공급` | Not migrated |  |
| 2602 | 2022-01-10 | 육아템 추천 및 평가 | `육아템-추천-및-평가` | Not migrated |  |
| 3128 | 2022-11-17 | 수영 중급자를 위한 Tip | `수영-tip` | Not migrated |  |
| 3183 | 2023-01-02 | 합리적 보험 가입을 위한 Tip | `보험-tip` | Not migrated |  |

</details>

<details>
<summary>C / C++ ? total 11, migrated 0, declined 0, not migrated 11</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 2273 | 2021-05-27 | [C / C++] #include 지시어 ""와 <> | `c-c-include-지시어-와` | Not migrated |  |
| 2285 | 2021-08-01 | [C++] undefined reference to template | `c-undefined-reference-to-template` | Not migrated |  |
| 2440 | 2021-11-03 | [C++] Vector Erase시 Segmentation Fault | `c-vector-erase시-segmentation-fault` | Not migrated |  |
| 2538 | 2021-12-20 | [C++] Smart Pointer (unique_ptr / shared_ptr / weak_ptr) | `c-smart-pointer-unique_ptr-shared_ptr-weak_ptr` | Not migrated |  |
| 2550 | 2021-12-27 | [C++] Rvalue Reference | `c-rvalue-reference` | Not migrated |  |
| 2985 | 2022-07-06 | [C/C++] undefined reference to 'vtable for X' | `c-undefined-reference-to-vtable-for-x` | Not migrated |  |
| 2999 | 2022-07-25 | [C/C++] 접근 지정자 | `c-접근-지정자` | Not migrated |  |
| 3001 | 2022-07-26 | [C/C++] Parent Class에서 Child Class의 Variable or Function 접근 | `c-parent-class에서-child-class의-variable-or-function-접근` | Not migrated |  |
| 3009 | 2022-08-04 | [C/C++] Non-static Member Function Pointer in Class | `c-c-non-static-member-function-pointer-in-class` | Not migrated |  |
| 3254 | 2023-02-13 | [C++] STL priority_queue 사용법 | `c-stl-priority_queue-사용법` | Not migrated |  |
| 3260 | 2023-02-13 | [C++] STL set / map사용법 | `c-stl-set-map사용법` | Not migrated |  |

</details>

<details>
<summary>Posting ? total 11, migrated 0, declined 0, not migrated 11</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 971 | 2020-02-01 | [Wordpress] Synology NAS에 워드프레스 설치 | `wordpress-synology-nas에-워드프레스-설치` | Not migrated |  |
| 1023 | 2020-02-27 | [WordPress] 워드프레스 서브 도메인 '/wp' 제거 방법 | `wordpress-워드프레스-서브-도메인-wp-제거-방법` | Not migrated |  |
| 1026 | 2020-02-27 | [WordPress] 아이콘 깨짐 문제 해결 | `wordpress-아이콘-깨짐-문제-해결` | Not migrated |  |
| 1399 | 2020-10-01 | [NAS] Photo Station 사용법 | `nas-photo-station-사용법` | Not migrated |  |
| 1409 | 2020-10-22 | [NAS] Ubuntu Install using Docker | `nas-ubuntu-install-using-docker` | Not migrated |  |
| 1567 | 2020-12-28 | Wordpress 모든 Block Example | `wordpress-모든-block-example` | Not migrated |  |
| 1571 | 2020-12-28 | Theme 적용한 뒤 CSS 파일 수정으로 Theme 수정 | `theme-적용한-뒤-css-파일-수정으로-theme-수정` | Not migrated |  |
| 2584 | 2022-01-03 | [NAS] Docker SSH 접속 Error (key_exchange_identification: Connection closed by remote host) | `nas-docker-ssh-접속-error-key_exchange_identification-connection-closed-by-remote-host` | Not migrated |  |
| 2889 | 2022-03-21 | [Wordpress] PHP Version Update on NAS | `wordpress-php-version-update-on-nas` | Not migrated |  |
| 3290 | 2023-03-29 | [WordPress] 워드프레스 구텐베르크 키보드 단축키 | `wordpress-워드프레스-구텐베르크-키보드-단축키` | Not migrated |  |
| 3468 | 2023-10-10 | [NAS] Install ipkg on Synology NAS | `nas-install-ipkg-on-synology-nas` | Not migrated |  |

</details>

<details>
<summary>Series ? total 11, migrated 9, declined 2, not migrated 0</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 2410 | 2021-10-12 | 데이터 시각화 | `데이터-시각화` | Declined | [PR #6](https://github.com/shumin215/blog/pull/6) |
| 2464 | 2021-11-18 | [PyQt] Dialog | `pyqt-dialog` | Migrated to main | `origin/main` |
| 2471 | 2021-11-18 | [PyQt] Dialog과 Data 교환 | `pyqt-dialog과-data-교환` | Declined | [PR #8](https://github.com/shumin215/blog/pull/8) |
| 2838 | 2022-03-04 | [Buffer Lab] Level 0 | `buffer-bomb-lab-level-0` | Migrated to main | `origin/main` |
| 2861 | 2022-03-17 | [Bomb Lab] Phase 1 | `bomb-lab-phase-1` | Migrated to main | `origin/main` |
| 2872 | 2022-03-21 | [Bomb Lab] Phase 2 | `bomb-lab-phase-2` | Migrated to main | `origin/main` |
| 2902 | 2022-03-21 | [Bomb Lab] Phase 3 | `bomb-lab-phase-3` | Migrated to main | `origin/main` |
| 2907 | 2022-03-22 | [Bomb Lab] Phase 4 | `bomb-lab-phase-4` | Migrated to main | `origin/main` |
| 2910 | 2022-03-23 | [Bomb Lab] Phase 5 | `bomb-lab-phase-5` | Migrated to main | `origin/main` |
| 2914 | 2022-03-23 | [Bomb Lab] Phase 6 | `bomb-lab-phase-6` | Migrated to main | `origin/main` |
| 2928 | 2022-03-24 | [Bomb Lab] Secret Phase | `bomb-lab-secret-phase` | Migrated to main | `origin/main` |

</details>

<details>
<summary>Wordpress ? total 11, migrated 0, declined 0, not migrated 11</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 701 | 2019-10-26 | [Wordpress] 유용한 Wordpress Plugin | `유용한-wordpress-plugin` | Not migrated |  |
| 714 | 2019-10-26 | [Wordpress] Permalink 404 Error | `wordpress-permalink-404-error` | Not migrated |  |
| 773 | 2019-10-29 | [Wordpress] 사용중인 Plugin | `wordpress-사용중인-plugin` | Not migrated |  |
| 798 | 2019-10-30 | [Wordpress] Google에 검색 노출을 위해 사이트 등록 | `wordpress-google에-검색-노출을-위해-사이트-등록` | Not migrated |  |
| 971 | 2020-02-01 | [Wordpress] Synology NAS에 워드프레스 설치 | `wordpress-synology-nas에-워드프레스-설치` | Not migrated |  |
| 1023 | 2020-02-27 | [WordPress] 워드프레스 서브 도메인 '/wp' 제거 방법 | `wordpress-워드프레스-서브-도메인-wp-제거-방법` | Not migrated |  |
| 1026 | 2020-02-27 | [WordPress] 아이콘 깨짐 문제 해결 | `wordpress-아이콘-깨짐-문제-해결` | Not migrated |  |
| 1567 | 2020-12-28 | Wordpress 모든 Block Example | `wordpress-모든-block-example` | Not migrated |  |
| 1571 | 2020-12-28 | Theme 적용한 뒤 CSS 파일 수정으로 Theme 수정 | `theme-적용한-뒤-css-파일-수정으로-theme-수정` | Not migrated |  |
| 2889 | 2022-03-21 | [Wordpress] PHP Version Update on NAS | `wordpress-php-version-update-on-nas` | Not migrated |  |
| 3290 | 2023-03-29 | [WordPress] 워드프레스 구텐베르크 키보드 단축키 | `wordpress-워드프레스-구텐베르크-키보드-단축키` | Not migrated |  |

</details>

<details>
<summary>Experience ? total 9, migrated 0, declined 0, not migrated 9</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1061 | 2020-04-15 | [맛집] 세상의 모든 아침 광교점 | `후기-세상의-모든-아침-음식점` | Not migrated |  |
| 1894 | 2021-01-25 | 아파트 분양에 필요한 금액 | `아파트-분양에-필요한-금액` | Not migrated |  |
| 1903 | 2021-01-27 | 지역주택종합 (지주택) 이란 | `지역주택종합-지주택-이란` | Not migrated |  |
| 1911 | 2021-02-12 | 임대주택 종류 | `임대주택-종류` | Not migrated |  |
| 1983 | 2021-03-28 | [부동산] 청약 정보 Tip | `청약-정보-tip` | Not migrated |  |
| 2452 | 2021-11-14 | "오늘부터 개발자" 책 리뷰 | `오늘부터-개발자-책-리뷰` | Not migrated |  |
| 2602 | 2022-01-10 | 육아템 추천 및 평가 | `육아템-추천-및-평가` | Not migrated |  |
| 3128 | 2022-11-17 | 수영 중급자를 위한 Tip | `수영-tip` | Not migrated |  |
| 3183 | 2023-01-02 | 합리적 보험 가입을 위한 Tip | `보험-tip` | Not migrated |  |

</details>

<details>
<summary>Digital Logic ? total 8, migrated 0, declined 0, not migrated 8</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 983 | 2020-02-12 | Analysis, Elaboration and Synthesis | `analysis-elaboration-and-synthesis` | Not migrated |  |
| 1386 | 2020-09-12 | SAIF Format | `saif-format` | Not migrated |  |
| 1456 | 2020-11-24 | [Digital Logic] Static Timing Analysis (STA) | `digital-logic-static-timing-analysis-sta` | Not migrated |  |
| 1765 | 2021-01-14 | [Digital Logic] Timing Violation 해결 방법 | `digital-logic-timing-violation-해결-방법` | Not migrated |  |
| 2570 | 2021-12-28 | [Digital Logic] RTL Deisgn Code Reference | `digital-logic-rtl-deisgn-code-reference` | Not migrated |  |
| 2653 | 2022-02-01 | [Digital Logic] Difference between Mealy Machine and Moore Machine | `digital-logic-difference-between-mealy-machine-and-moore-machine` | Not migrated |  |
| 2687 | 2022-02-01 | [Digital Logic] Synchronizer Techniques for Multi-clock Domain SoCs & FPGAs | `digital-logic-synchronizer-techniques-for-multi-clock-domain-socs-fpgas` | Not migrated |  |
| 2755 | 2022-02-03 | [Digital Logic] Clock Gating 관련 용어 | `digital-logic-clock-gating-관련-용어` | Not migrated |  |

</details>

<details>
<summary>Reverse Engineering ? total 8, migrated 8, declined 0, not migrated 0</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 2838 | 2022-03-04 | [Buffer Lab] Level 0 | `buffer-bomb-lab-level-0` | Migrated to main | `origin/main` |
| 2861 | 2022-03-17 | [Bomb Lab] Phase 1 | `bomb-lab-phase-1` | Migrated to main | `origin/main` |
| 2872 | 2022-03-21 | [Bomb Lab] Phase 2 | `bomb-lab-phase-2` | Migrated to main | `origin/main` |
| 2902 | 2022-03-21 | [Bomb Lab] Phase 3 | `bomb-lab-phase-3` | Migrated to main | `origin/main` |
| 2907 | 2022-03-22 | [Bomb Lab] Phase 4 | `bomb-lab-phase-4` | Migrated to main | `origin/main` |
| 2910 | 2022-03-23 | [Bomb Lab] Phase 5 | `bomb-lab-phase-5` | Migrated to main | `origin/main` |
| 2914 | 2022-03-23 | [Bomb Lab] Phase 6 | `bomb-lab-phase-6` | Migrated to main | `origin/main` |
| 2928 | 2022-03-24 | [Bomb Lab] Secret Phase | `bomb-lab-secret-phase` | Migrated to main | `origin/main` |

</details>

<details>
<summary>Vim ? total 7, migrated 0, declined 0, not migrated 7</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1901 | 2021-01-26 | [Vim] 특정 단어가 들어간 Line 지우기 / 남기기 | `vim-특정-단어가-들어간-line-지우기-남기기` | Not migrated |  |
| 1919 | 2021-02-24 | [Vim] 유용한 단축키 | `vim-유용한-단축키` | Not migrated |  |
| 2534 | 2021-12-16 | [Vim] Buffer 명령어 | `vim-buffer-명령어` | Not migrated |  |
| 2536 | 2021-12-16 | [Vim] Cscope 사용법 | `vim-cscope-사용법` | Not migrated |  |
| 2543 | 2021-12-21 | [Vim] Cscope - E262: error reading cscope connection 0 | `vim-cscope-e262-error-reading-cscope-connection-0` | Not migrated |  |
| 2567 | 2021-12-28 | [Vim] ^M (개행문자) 제거 | `vim-m-제거` | Not migrated |  |
| 2973 | 2022-06-30 | [Vim] 문자열 치환 | `vim-문자열-치환` | Not migrated |  |

</details>

<details>
<summary>Dialog ? total 5, migrated 0, declined 0, not migrated 5</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 3362 | 2023-06-22 | [English] Dialog 1 | `writing-1` | Not migrated |  |
| 3381 | 2023-07-13 | [English] Writing 2 | `english-writing-2` | Not migrated |  |
| 3387 | 2023-07-20 | [English] Writing 3 | `english-writing-3` | Not migrated |  |
| 3389 | 2023-07-24 | [English] Writing 4 | `english-writing-4` | Not migrated |  |
| 3530 | 2023-12-12 | [Dialog] get 활용 - 1 | `dialog-get-활용-1` | Not migrated |  |

</details>

<details>
<summary>Etc. ? total 5, migrated 0, declined 0, not migrated 5</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 3025 | 2022-08-24 | [Etc.] Chrome "연결이 비공개로 설정되어 있지 않습니다." 페이지 제거 | `etc-chrome-연결이-비공개로-설정되어-있지-않습니다-페이` | Not migrated |  |
| 3113 | 2022-11-04 | CMake 사용법 | `cmake-사용법` | Not migrated |  |
| 3115 | 2022-11-04 | CMake 명령어 | `cmake-명령어` | Not migrated |  |
| 3122 | 2022-11-09 | CMake Pre-defined Variables | `cmake-pre-defined-variables` | Not migrated |  |
| 3408 | 2023-07-31 | VS Code X11 Forwarding over SSH | `vs-code-x11-forwarding-over-ssh` | Not migrated |  |

</details>

<details>
<summary>NAS ? total 4, migrated 0, declined 0, not migrated 4</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1399 | 2020-10-01 | [NAS] Photo Station 사용법 | `nas-photo-station-사용법` | Not migrated |  |
| 1409 | 2020-10-22 | [NAS] Ubuntu Install using Docker | `nas-ubuntu-install-using-docker` | Not migrated |  |
| 2584 | 2022-01-03 | [NAS] Docker SSH 접속 Error (key_exchange_identification: Connection closed by remote host) | `nas-docker-ssh-접속-error-key_exchange_identification-connection-closed-by-remote-host` | Not migrated |  |
| 3468 | 2023-10-10 | [NAS] Install ipkg on Synology NAS | `nas-install-ipkg-on-synology-nas` | Not migrated |  |

</details>

<details>
<summary>PyQt ? total 3, migrated 1, declined 1, not migrated 1</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 2460 | 2021-11-15 | [PyQt] Signal과 Slot 개념 | `pyqt-signal과-slot-개념` | Not migrated |  |
| 2464 | 2021-11-18 | [PyQt] Dialog | `pyqt-dialog` | Migrated to main | `origin/main` |
| 2471 | 2021-11-18 | [PyQt] Dialog과 Data 교환 | `pyqt-dialog과-data-교환` | Declined | [PR #8](https://github.com/shumin215/blog/pull/8) |

</details>

<details>
<summary>Compiler ? total 2, migrated 0, declined 0, not migrated 2</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 1998 | 2021-04-04 | [Compiler] GCC Compiler | `compiler-gcc-compiler` | Not migrated |  |
| 2775 | 2022-02-05 | [Compiler] Compiler Pipeline 구성 | `compiler-compiler-pipeline-구성` | Not migrated |  |

</details>

<details>
<summary>About Shumin ? total 1, migrated 0, declined 0, not migrated 1</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 844 | 2019-11-07 | Who is Shumin? | `shumin` | Not migrated |  |

</details>

<details>
<summary>System Verilog ? total 1, migrated 0, declined 0, not migrated 1</summary>

| WP ID | Date | Title | Slug | Status | Reference |
|------:|------|-------|------|--------|-----------|
| 951 | 2020-01-23 | What is this operator called as “+:” in Verilog | `what-is-this-operator-called-as-in-verilog` | Not migrated |  |

</details>

## Declined Posts

| WP ID | Date | Title | Slug | Category | PR |
|------:|------|-------|------|----------|----|
| 2410 | 2021-10-12 | 데이터 시각화 | `데이터-시각화` | Series | [#6](https://github.com/shumin215/blog/pull/6) |
| 2471 | 2021-11-18 | [PyQt] Dialog과 Data 교환 | `pyqt-dialog과-data-교환` | Series, PyQt | [#8](https://github.com/shumin215/blog/pull/8) |
| 3549 | 2024-03-25 | [English] Because / Since / Due to / In order to / So that 사용법 | `english-because-since-due-to-in-order-to-so-that-사용법` | English, Fancy Expression | [#3](https://github.com/shumin215/blog/pull/3)<br>[#1](https://github.com/shumin215/blog/pull/1) |

## How to Update

1. Re-query the WordPress published post list.
2. Fetch `origin/main`.
3. Compare WordPress slugs with `src/content/posts/` file names.
4. Mark closed, unmerged migration PRs as declined.

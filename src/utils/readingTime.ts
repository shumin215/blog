/** 본문 텍스트 기준 예상 읽기 시간 (분) 반환 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

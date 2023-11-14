export function getFormattedMinutes(ms: number) {
  const date = new Date(ms);
  const minutes = date.getMinutes()
  const seconds = date.getSeconds() < 10 ? date.getSeconds() + '0' : date.getSeconds();
  return `${minutes}:${seconds}`
}

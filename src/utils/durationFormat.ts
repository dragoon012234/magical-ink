export function durationFormat(seconds: number) {
  seconds = Math.floor(seconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  seconds = seconds % 60;

  return `${hours > 0 ? `${hours}h` : ""} ${minutes > 0 ? `${minutes}m` : ""} ${seconds > 0 ? `${seconds}s` : ""}`;
}

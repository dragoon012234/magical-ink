export function nameToPath(name: string) {
  return name.toLowerCase().replaceAll("'", "").replaceAll(/[ /-]/g, "_");
}

export function cn(...classes: (string | boolean | undefined | null | 0 | false)[]) {
  return classes.filter((c) => typeof c === "string" && c).join(" ");
}

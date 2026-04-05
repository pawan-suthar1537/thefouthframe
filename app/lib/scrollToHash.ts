const NAVBAR_OFFSET = 64;
const EXTRA_OFFSET = 16;

const getScrollBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

export function scrollToHash(hash: string) {
  if (typeof window === "undefined" || !hash.startsWith("#")) {
    return false;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));

  if (!target) {
    return false;
  }

  const top = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET - EXTRA_OFFSET,
  );

  window.scrollTo({
    top,
    behavior: getScrollBehavior(),
  });

  return true;
}

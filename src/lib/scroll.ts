export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector("header");
  const offset = header instanceof HTMLElement ? header.offsetHeight + 8 : 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function handleHashNavigation(
  event: React.MouseEvent<HTMLAnchorElement>,
  href?: string,
) {
  if (!href?.startsWith("#")) return;

  const id = href.slice(1);
  if (!id) return;

  event.preventDefault();
  scrollToId(id);
  window.history.pushState(null, "", href);
}

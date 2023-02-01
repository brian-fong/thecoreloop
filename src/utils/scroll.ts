export default function scrollTo(elem_id: string) {
  const scroll_elem: HTMLElement = document.getElementById(elem_id)!;
  scroll_elem.scrollIntoView({
    behavior: "smooth",
  });
}


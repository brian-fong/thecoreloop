import wait from "./wait";

export default async function pressBtn(btn: any) {
  // Simulate button press
  btn.style.transform = "translate(3px, 3px)";
  btn.style.boxShadow = "none";
  await wait(100);
  btn.style.transform = "translate(0px, 0px)";
  btn.style.boxShadow = "3px 3px 2px rgba(0, 0, 0, 0.5)";
}


import wait from "./wait";

export async function pressBtn(btn: HTMLElement) {
  // Simulate button press
  btn.style.transform = "translate(3px, 3px)";
  btn.style.boxShadow = "none";
  await wait(100);
  btn.style.transform = "translate(0px, 0px)";
  btn.style.boxShadow = "3px 3px 2px rgba(0, 0, 0, 0.5)";
}

export async function activateBtn(btn: HTMLElement) {
  btn.style.transform = "translate(0px, 0px)";
  btn.style.filter = "brightness(1.0)";
  btn.style.boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)";
}

export async function deactivateBtn(btn: HTMLElement) {
  // Simulate button press
  btn.style.transform = "translate(3px, 3px)";
  btn.style.boxShadow = "none";
  await wait(100);
  btn.style.transform = "translate(0px, 0px)";
  btn.style.boxShadow = "3px 3px 2px rgba(0, 0, 0, 0.5)";
}


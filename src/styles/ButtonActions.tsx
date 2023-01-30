import wait from "../utils/wait";

export async function toggleButton(btn: any, active: boolean) {
  // Toggle button between active and inactive 
  if (active) {
    btn.style.transform = "translate(0px, 0px)";
    btn.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
    btn.style.opacity = "1.0";
    btn.style.cursor = "pointer";
  } else {
    btn.style.transform = "translate(2px, 2px)";
    btn.style.boxShadow = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "default";
  }
}

export async function pressButton(btn: any) {
  // Simulate button press
  btn.style.transform = "translate(2px, 2px)";
  btn.style.boxShadow = "none";
  await wait(100);
  btn.style.transform = "translate(0px, 0px)";
  btn.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
}


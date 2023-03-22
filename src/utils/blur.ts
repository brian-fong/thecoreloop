export default function blur(){
  // This function works to distract focus away
  var tmp = document.createElement("input");  // Assign input element
  tmp.style.position = "fixed";               // Prevent abrupt scrolling
  document.body.appendChild(tmp);             // Create input element
  tmp.focus();                                // Focus input element
  document.body.removeChild(tmp);             // Remove input element
}


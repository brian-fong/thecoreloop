export default function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader: FileReader = new FileReader();

    // Define event handlers
    reader.onabort = () => console.log("File reading aborted!");
    reader.onerror = () => console.log("File reading failed!");
    reader.onload = () => resolve(reader.result as string);
    
    // reader.readAsArrayBuffer(file); // Read given file as ArrayBuffer
    // reader.readAsBinaryString(file);  // Read given file as binary
    reader.readAsDataURL(file); // Read given file as Base64 String
  });
}


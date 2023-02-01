// Check if given string contains a URL
export default function validURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error: any) {
    console.log(error.message);
    if (error.message.toLowerCase().includes("invalid url")) {
      return false;
    } else {
      throw error;
    }
  }
}


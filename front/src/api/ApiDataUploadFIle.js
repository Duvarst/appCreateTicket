import axios from "axios";

export async function uploadFile(formData) {
  try {
    let result = await axios.post(
      "http://localhost:5000/api/tickets/image/upload",
      {
        files: formData,
      },
      {
        headers: {
          "Content-Type": "form/multipart",
        },
      }
    );
    return result.data;
  } catch (e) {
    console.error(e);
  }
}

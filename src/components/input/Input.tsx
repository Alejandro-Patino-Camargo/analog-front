import { useState, FormEvent, ChangeEvent } from "react";
import { base_url } from "../../config";
import Loader from "../loader/Loader";
import "./Input.css";

function Input() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetchMP3(userInput);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  async function fetchMP3(youtubeLink: string) {
    try {
      const backendURL = `${base_url}/api/v1/fetchMP3?link=${youtubeLink}`;
      const response = await fetch(backendURL);
      console.log(response);

      if (response.ok) {
        const blob = await response.blob();
        const downloadLink = document.createElement("a");

        const blobUrl = window.URL.createObjectURL(blob);

        downloadLink.href = blobUrl;
        downloadLink.download = "audio.mp3";
        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
      } else {
        console.error("Failed to fetch MP3: Response was not OK.");
        return { success: false, error: "Failed to fetch MP3" };
      }
    } catch (error) {
      console.error("Error fetching MP3:", error);
      return { success: false, error: "Error fetching MP3" };
    }
  }

  return (
    <div className="input-container">
      <div className="input-card">
        <h3 className="input-title">YouTube to MP3 Converter </h3>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            className="link-input"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Paste a YouTube link..."
          />
          {loading ? (
            <Loader />
          ) : (
            <button type="submit" className="input-button">
              Download
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Input;

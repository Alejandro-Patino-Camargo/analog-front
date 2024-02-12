import { useState, FormEvent, ChangeEvent } from "react";
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
    }

    setUserInput("");
  };

  async function fetchMP3(youtubeLink: string) {
    try {
      const backendURL = `http://localhost:3000/api/v1/fetchMP3?link=${youtubeLink}`;
      const response = await fetch(backendURL);

      if (response.ok) {
        const data = await response.json();
        const blob = new Blob([data.body]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.filename}`;
        a.type = "audio/mpeg";
        document.body.appendChild(a);
        a.click();
        console.log("MP3 download initiated.");
      } else {
        console.error("Failed to fetch MP3: Response was not OK.");
        return Error;
      }
    } catch (error) {
      console.error("Error fetching MP3:", error);
      return error;
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

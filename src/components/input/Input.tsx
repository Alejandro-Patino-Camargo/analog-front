import React, { useState, FormEvent, ChangeEvent } from "react";
import "./Input.css";

function Input() {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchMP3(userInput);
    setUserInput("");
  };

  async function fetchMP3(youtubeLink: string) {
    try {
      const backendURL = `http://localhost:3000/api/v1/fetchMP3?link=${youtubeLink}`;
      const response = await fetch(backendURL);

      console.log(response)

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "audio.mp3";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        console.log("MP3 download initiated.");
      } else {
        console.error("Failed to fetch MP3: Response was not OK.");
      }
    } catch (error) {
      console.error("Error fetching MP3:", error);
    }
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          className="link-input"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter a YouTube link..."
        />
        <button type="submit" className="input-button">Submit</button>
      </form>
    </div>
  );
}

export default Input;
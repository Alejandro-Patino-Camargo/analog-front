import "./About.css";
import logo from "../../assets/ale.jpeg";

//TODO:
//1. add buttons to source code, backend and frontend
//2. add future iteractions paragraph (short)

export default function About() {
  const data = {
    title: "About",
    picture: "../../assets/ale.jpeg",
    project:
      "Analog simplifies the process of converting YouTube videos to MP3 by utilizing the youtube-dl API for fetching video URLs and downloading them as audio files. The frontend is build with React and CSS, and tracks the success of each download  stores it in a MongoDB database. While it's possible to update the successful download count using frontend state, incorporating a MongoDB database was chosen to enhance the project's scalability and data management capabilities.",
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-title">
          <h1>{data.title}</h1>
        </div>
        <h2>Project Overview</h2>
        <div className="about-description">
          <p>{data.project}</p>
        </div>
        <br />
      </div>
      <div className="about-picture">
        <img src={logo} alt="About picture" />
      </div>
    </div>
  );
}

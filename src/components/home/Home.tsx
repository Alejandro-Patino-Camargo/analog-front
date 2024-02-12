import Input from "../input/Input";
import Counter from "../counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div className="home-counter">
      <Counter />
      <div className="home-container">
        <Input />
      </div>
    </div>
  );
}

export default Home;

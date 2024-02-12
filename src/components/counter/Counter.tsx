import { useState, useEffect } from "react";
import "./Counter.css";

interface CounterData {
  counters: number[];
}

function Counter() {
  const [counters, setCounters] = useState<number[]>([]);

  useEffect(() => {
    async function fetchCounter() {
      try {
        const backendURL = `http://localhost:3000/api/v1/counter`;
        const response = await fetch(backendURL);
        const data: CounterData = await response.json();

        if (response.ok) {
          setCounters(data.counters);
        } else {
          console.error("Failed to fetch counters: Response was not OK.");
        }
      } catch (error) {
        console.error("Error fetching counters:", error);
      }
    }

    fetchCounter();
  }, [counters]);

  return (
    <div className="counter-container">
      <p>successful downloads&nbsp;</p>
      {counters.map((counter, index) => (
        <p key={index}>{counter}</p>
      ))}
    </div>
  );
}

export default Counter;

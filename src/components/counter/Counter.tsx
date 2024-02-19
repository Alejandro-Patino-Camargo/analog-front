import { useState, useEffect } from "react";
import { base_url } from "../../config.js";
import "./Counter.css";

interface CounterData {
  counters: number[];
}

function Counter() {
  const [counters, setCounters] = useState<number[]>([]);

  //FIX: useEffect should not depend on counters,  it should only run once
  //1. currently makes a fetch request every time, not just once
  useEffect(() => {
    async function fetchCounter() {
      try {
        const backendURL = `${base_url}/api/v1/counter`;
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

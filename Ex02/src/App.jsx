import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
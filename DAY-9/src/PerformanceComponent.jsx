import { useState, useMemo } from "react";

function Loop() {
  const [bgColor, setBgColor] = useState("green");
  const [number, setNumber] = useState(0);

  function toggleColor() {
    setBgColor(bgColor === "green" ? "red" : "green");
  }

  function handleChange(e) {
    setNumber(Number(e.target.value));
  }

  const t = useMemo(() => {
    console.log("Loop running...");
    let s = 0;

    for (let i = number; i < 10000; i++) {
      s += i;
    }

    return s;
  }, [number]);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: bgColor,
          padding: "20px",
          width: "220px",
          borderRadius: "20px",
        }}
      >
        <input
          type="number"
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
        />
      </div>

      <button onClick={toggleColor}>Toggle</button>

      <p>Entered number: {number}</p>
      <p>Loop result: {t}</p>
    </div>
  );
}

export default Loop;

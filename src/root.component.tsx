import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { randomColor } from "./utils/randomColor";

const data = [
  { option: "0", style: { backgroundColor: "green" } },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2" },
];

export default function Root(props) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <h1>QUAL BOLETO SERÁ PAGO?</h1>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button style={{ background: "pink" }} onClick={handleSpinClick}>
        SPIN
      </button>
    </>
  );
}

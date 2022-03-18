import { useAtom, useSetAtom, useAtomValue } from "jotai";
import { toCircle, boxAtom, changeColor } from "../context/boxAtom";
import { useState } from "react";

const Box = ({ value }) => {
  const changeForm = useSetAtom(toCircle);
  const switchColor = useSetAtom(changeColor);
  const { color, rounded } = useAtomValue(boxAtom);
  return (
    <div
      // onClick={() => console.log(changeForm)}
      onClick={() => changeForm()}
      className={`w-40 h-40 ${rounded} ${color} shadow-md flex justify-center items-center`}
    >
      {value}
      <button
        onClick={() => switchColor("bg-red-400")}
        className="bg-black p-3 text-white"
      >
        to red
      </button>
    </div>
  );
};

export default Box;

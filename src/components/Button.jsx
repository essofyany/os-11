import React from "react";
import { useRouter } from "next/router";

const Button = (props) => {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push(props.path)}
      className="p-5 w-1/4 text-center text-white bg-red-500 rounded-lg"
    >
      {props.label}
    </div>
  );
};

export default Button;

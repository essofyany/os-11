import { atom } from "jotai";

export const boxAtom = atom({
  color: "bg-amber-500",
  rounded: "rounded-lg",
});

export const toCircle = atom(
  (get) => get(boxAtom),
  (get, set) => {
    console.log("triggired");
    set(boxAtom, { ...get(boxAtom), rounded: "rounded-full" });
  }
);

export const changeColor = atom(null, (get, set, payload) =>
  set(boxAtom, { ...get(boxAtom), color: payload })
);

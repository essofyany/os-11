import { useRouter } from "next/router";
import BoxGrid from "../components/BoxGrid";
import Button from "../components/Button";

export default function HomePage() {
  const { push } = useRouter();
  const list = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  return (
    <section className="w-full h-screen bg-fuchsia-600 flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white flex flex-col space-y-5 justify-center items-center shadow-lg">
        <BoxGrid list={list} />
      </div>
    </section>
  );
}

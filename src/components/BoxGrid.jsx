import Box from "./Box";

const BoxGrid = ({ list }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {list.map((item) => (
        <Box key={item} value={item} />
      ))}
    </div>
  );
};

export default BoxGrid;

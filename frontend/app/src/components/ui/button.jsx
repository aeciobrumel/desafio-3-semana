export const Button = ({ sizeH, onClick, label }) => {
  return (
    <div
      className={`bg-white flex justify-center items-center cursor-pointer font-bold text-teal-900 rounded-3xl  h-${sizeH}
      w-34 pl-2 p-2 mt-5`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

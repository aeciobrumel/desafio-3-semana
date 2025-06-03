export const Button = ({ sizeH, onClick, label }) => {
  return (
    <button
      className={`bg-white flex justify-center items-center cursor-pointer font-bold text-teal-900 rounded-3xl  h-${sizeH}
      w-34 pl-2 p-2 mt-5 hover:bg-amber-500 hover:text-white focus:bg-amber-500 focus:text-white focus:outline-none focus:ring-0`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

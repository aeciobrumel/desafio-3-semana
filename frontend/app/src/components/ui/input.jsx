export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-items items-center h-8 rounded-[50px]  m-3 bg-white">
      <input
        className="flex-1 outline-none w-full px-4 text-teal-900"
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

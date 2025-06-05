export const InputForm = ({
  type,
  placeholder,
  placeholderInInput,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-5 border-b-1 border-gray-300 p-5">
      <div>{placeholder}</div>
      <input
        className="bg-white outline-none w-full px-4 p-1 rounded-md"
        value={value}
        type={type}
        placeholder={placeholderInInput}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

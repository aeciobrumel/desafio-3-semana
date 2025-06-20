export default function FileUpload({ label, svg, onChange, fileName }) {
  return (
    <div className="flex flex-2 items-center gap-3 bg-white border-1 border-gray-300 rounded-lg  ">
      <label
        className=" flex gap-2 text-center items-center cursor-ponter rounded-s-lg bg-verdeclaro text-white px-4 py-2  shadow hover:bg-laranja transition duration-200"
        htmlFor="file-input"
      >
        {label}
        <img src={svg} alt="" />
      </label>

      <input
        type="file"
        className="hidden"
        id="file-input"
        onChange={onChange}
      />

      <span className=" text-gray-700 text-sm truncate max-w-xs">
        {fileName}
      </span>
    </div>
  );
}

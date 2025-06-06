import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HeaderPage = ({ title, iconUrl, voltar = false, add = false }) => {
  const navigate = useNavigate();
  const HandleFormUser = () => {
    navigate("/create");
  };
  const HandleBack = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-row pt-2">
      {voltar && (
        <button className="ml-5" onClick={HandleBack}>
          <Link>
            <img
              className=" flex justify-center items-center p-1 bg-verdeclaro rounded-[50px] hover:bg-amber-500 hover:text-white focus:bg-amber-500 focus:text-white focus:outline-none focus:ring-0"
              src="/arrow-left.svg"
              alt="voltar"
            />
          </Link>
        </button>
      )}
      <Link>
        <img src={iconUrl} alt="icon" className="ml-5" />
      </Link>
      <h1 className="flex flex-row ml-5 min-w-[150px] ml-5 text-3xl font-bold">
        {title}
      </h1>
      {add && (
        <button className="ml-5" onClick={HandleFormUser}>
          <Link>
            <img
              className=" flex justify-center items-center p-1 bg-verdeclaro rounded-[50px] hover:bg-amber-500 hover:text-white focus:bg-amber-500 focus:text-white focus:outline-none focus:ring-0"
              src="/plus.svg"
              alt="add"
            />
          </Link>
        </button>
      )}
    </div>
  );
};

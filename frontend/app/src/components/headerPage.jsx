import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const HeaderPage = ({ title, iconUrl, voltar = false, add = false }) => {
  const navigate = useNavigate();
  const { user, setUser, isImpersonating } = useAuth();
  const HandleFormUser = () => {
    navigate("/create");
  };
  const HandleBack = () => {
    navigate("/home");
  };

  const handleStopImpersonate = async () => {
    const originalToken = localStorage.getItem("originalToken");
    const originalUser = localStorage.getItem("originalUser");

    if (!originalToken || !originalUser) {
      alert("Você não está impersonando.");
      return;
    }

    try {
      localStorage.setItem("token", originalToken);
      localStorage.setItem("user", originalUser);
      localStorage.removeItem("originalToken");
      localStorage.removeItem("originalUser");
      setUser(JSON.parse(originalUser));

      alert("Você voltou para o seu usuário original.");

      navigate("/home", { replace: true });
    } catch (error) {
      alert(
        "Erro ao sair do impersonate: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-row pt-2 flex-1">
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
      {isImpersonating && (
        <div
          onClick={handleStopImpersonate}
          className="flex-1 text-red-500 flex flex-row items-center gap-3 justify-end"
        >
          parar de impersonar{user?.name} <img src="/eye-slash.svg" alt="" />
        </div>
      )}
    </div>
  );
};

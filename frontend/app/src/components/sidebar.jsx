import { useNavigate } from "react-router-dom";

import Logo from "../components/ui/logo";
import Home from "../components/ui/home";
import LogoutIcon from "../components/ui/logoutIcon";
export const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <section className=" w-40">
      <div className="flex">
        <div className="bg-verdeclaro h-screen w-full flex flex-col items-center gap-10">
          <div className="pt-5">
            <Logo size={90} />
          </div>
          <button
            onClick={handleHome}
            className="text-white flex hover:bg-laranja py-2 px-4 rounded  flex-col items-center"
          >
            <Home />
            Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-verdeclaro hover:bg-laranja text-white py-2 px-4 rounded flex flex-col items-center"
          >
            <LogoutIcon />
            sair
          </button>
        </div>
      </div>
    </section>
  );
};

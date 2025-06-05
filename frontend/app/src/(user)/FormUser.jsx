import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import { Input } from "../components/ui/input";
import { InputForm } from "../components/ui/inputForm";

export const FormUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <SideBar></SideBar>
      <SectionContent>
        {user && (
          <HeaderPage
            title={"novo Usuário"}
            voltar
            iconUrl={"/users-three.svg"}
          ></HeaderPage>
        )}
        <div className=" mt-5 bg-cinza max-h-[calc(100vh-180px)] rounded-[30px] p-5">
          <form className="gap-1 flex flex-col" action="">
            <InputForm placeholder={"Nome"} type={"text"} />
          </form>
        </div>
      </SectionContent>
    </Container>
  );
};

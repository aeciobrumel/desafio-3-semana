import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import { InputForm } from "../components/ui/inputForm";
import { SelectPermission } from "../components/ui/selectPermission";
import { FormUser } from "./FormUser";

export const UpdatePage = () => {
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
            title={"Editar Usuário"}
            voltar
            iconUrl={"/users-three.svg"}
          ></HeaderPage>
        )}
        <FormUser btnName={"cadastrar usuário"}></FormUser>
      </SectionContent>
    </Container>
  );
};

import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import { InputForm } from "../components/ui/inputForm";
import { SelectPermission } from "../components/ui/selectPermission";
import { FormUser } from "./FormUser";
import axios from "axios";

export const StorePage = () => {
  const navigate = useNavigate();

  const handlePostUser = async (payload) => {
    try {
      await axios.post("http://localhost:8000/api/users", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("deu bom");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("erro de conexão");
    }
  };
  return (
    <Container>
      <SideBar></SideBar>
      <SectionContent>
        <HeaderPage
          title={"novo Usuário"}
          voltar
          iconUrl={"/users-three.svg"}
        ></HeaderPage>
        <FormUser
          btnName={"cadastrar usuário"}
          onSubmit={handlePostUser}
        ></FormUser>
      </SectionContent>
    </Container>
  );
};

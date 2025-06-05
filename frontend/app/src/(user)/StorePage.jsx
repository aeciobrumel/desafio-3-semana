import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import { InputForm } from "../components/ui/inputForm";
import { SelectPermission } from "../components/ui/selectPermission";
import { FormUser } from "./FormUser";

export const StorePage = () => {
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
  const handlePostUser = async (payload) => {
    try {
      const res = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        alert("deu bom");
        navigate("/home");
      } else {
        alert("nao deu bom" + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("erro de conexão");
    }
  };
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
        <FormUser
          btnName={"cadastrar usuário"}
          onSubmit={handlePostUser}
        ></FormUser>
      </SectionContent>
    </Container>
  );
};

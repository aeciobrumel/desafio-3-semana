import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import { InputForm } from "../components/ui/inputForm";
import { SelectPermission } from "../components/ui/selectPermission";
import { FormUser } from "./FormUser";
import axios from "axios";

export const UpdatePage = () => {
  const [user, setUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEditUser(response.data.data);
      });
  }, [id]);

  const handleUpdateUser = async (payload) => {
    try {
      console.log("payload antes", payload);
      if (!payload.password || payload.password.trim() === "") {
        delete payload.password;
      }
      console.log("esse é o payload agora", payload);

      await axios.put(`http://localhost:8000/api/users/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("deu bom");
      console.log("Payload enviado para edição:", payload);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

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
        {!editUser ? (
          <p>carregando</p>
        ) : (
          <FormUser
            userEditing={editUser}
            btnName={"alterar usuário"}
            onSubmit={handleUpdateUser}
          />
        )}
      </SectionContent>
    </Container>
  );
};

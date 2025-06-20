import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import ModalSuccess from "../components/ui/modalSuccess";
import { FormUser } from "./FormUser";
import axios from "axios";

export const UpdatePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  const [user, setUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const navigate = useNavigate();
  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/home");
  };

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
      if (!payload.password || payload.password.trim() === "") {
        delete payload.password;
      }
      await axios.post(
        `http://localhost:8000/api/users/${id}?_method=PUT`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "multipart/form-data",
          },
        }
      );
      setTitle("Alteração");
      setMessage("usuário Alterado");
      setOpenModal(true);
    } catch (error) {
      setTitle("Erro de alteração", error);
      setMessage("usuário Não foi alterado");
      setOpenModal(true);
    }
  };

  return (
    <Container>
      {user && (
        <ModalSuccess
          open={openModal}
          setOpen={handleCloseModal}
          title={title}
          message={message}
        />
      )}
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

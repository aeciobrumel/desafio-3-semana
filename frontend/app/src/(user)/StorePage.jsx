import { useEffect, useState } from "react"; // <-- precisa importar useState

import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import ModalSuccess from "../components/ui/modalSuccess";
import { FormUser } from "./FormUser";
import axios from "axios";

export const StorePage = () => {
  const [user, setUser] = useState(null);  
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
   const handleCloseModal = () => {
        setOpenModal(false);    
        navigate("/home");
  }
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
 
      await axios.post("http://localhost:8000/api/users", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTitle(`usuário criado!`);
      setMessage("");
      setOpenModal(true);
    } catch (error) {
      console.error(error);
      alert("erro de conexão");
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

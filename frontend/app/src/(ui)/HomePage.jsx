import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { UserCard } from "../components/usercard";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import ModalSuccess from "../components/ui/modalSuccess";

export const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    if (user?.first_login == true) {
      setMessage("Login realizado com sucesso");
      setOpenModal(true);
    }
  }, [user]);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const res = await fetch("http://localhost:8000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("Erro ao buscar Usuários");
        }
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {
        console.error("erro ao buscar usuarios:", error);
        navigate("/");
      }
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      {user && (
        <ModalSuccess
          open={openModal}
          setOpen={setOpenModal}
          title={`Bem vindo, ${user.name}!`}
          message={message}
        />
      )}
      <SideBar></SideBar>
      <SectionContent>
        {user && (
          <HeaderPage
            title={`Olá, ${user.name}`}
            add
            iconUrl={"/users-three.svg"}
          ></HeaderPage>
        )}
        <div className=" mt-5 bg-cinza overflow-hidden overflow-y-auto rounded-[50px] ">
          {users
            .filter((u) => u.id !== user?.id)
            .map((u) => (
              <UserCard
                className="-z-10"
                userName={u.name}
                userEmail={u.email}
                userAvatar="/user-white.svg"
              ></UserCard>
            ))}
          {users
            .filter((u) => u.id !== user?.id)
            .map((u) => (
              <UserCard
                className="-z-10"
                userName={u.name}
                userEmail={u.email}
                userAvatar="/user-white.svg"
              ></UserCard>
            ))}
          {users
            .filter((u) => u.id !== user?.id)
            .map((u) => (
              <UserCard
                className="-z-10"
                userName={u.name}
                userEmail={u.email}
                userAvatar="/user-white.svg"
              ></UserCard>
            ))}
        </div>
      </SectionContent>
    </Container>
  );
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { SideBar } from "../components/sidebar";
import { UserCard } from "../components/usercard";
import { HeaderPage } from "../components/headerPage";
import { Container } from "../components/ui/container";
import { SectionContent } from "../components/ui/sectionContent";
import ModalSuccess from "../components/ui/modalSuccess";
import axios from "axios";

export const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState(false);
  const [message, setMessage] = useState(null);
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleRemoveUser = (id) => {
    setMessage("");
    setTitle("Usuário deletado");
    setOpenModal(true);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/home");
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (user?.first_login == true) {
      setTitle(`Bem vindo, ${user.name}`);
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
        const res = await axios.get("http://localhost:8000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(res.data.data);
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
          setOpen={handleCloseModal}
          title={title}
          message={message}
        />
      )}
      <SideBar></SideBar>
      <SectionContent>
        {user && (
          <HeaderPage
            title={`Olá, ${user.name}`}
            add={user.permission === "admin" || user.permission === "docente"}
            iconUrl={"/users-three.svg"}
          ></HeaderPage>
        )}
        <div className=" mt-5 bg-cinza overflow-hidden overflow-y-auto rounded-t-[30px] ">
          {users
            .filter((u) => u.id !== user?.id)
            .map((u) => {
              const isAdmin = user?.permission === "admin";
              const isDocente = user?.permission === "docente";
              return (
                <UserCard
                  className="-z-10"
                  impersonateU={u}
                  userId={u.id}
                  userName={u.name}
                  userEmail={u.email}
                  eyebtn={isAdmin || (isDocente && u.permission !== "admin")}
                  editbtn={isAdmin || isDocente}
                  deletebtn={isAdmin}
                  userAvatar={u.photo ? u.photo : "/user-white.svg"}
                  onDelete={handleRemoveUser}
                />
              );
            })}
        </div>
      </SectionContent>
    </Container>
  );
};

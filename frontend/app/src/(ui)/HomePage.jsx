import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { Link } from "react-router-dom";
import { UserCard } from "../components/usercard";

export const HomePage = () => {
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
    <main className="min-h-screen flex bg-verdeclaro">
      <SideBar></SideBar>
      <section className="bg-white w-screen mt-5 mb-5 mr-5 rounded-[50px] p-10">
        <div className="">
          {user && (
            <h1 className="text-3xl font-bold">Bem-vindo, {user.name}!</h1>
          )}
          <div className=" bg-laranja max-h-[calc(100vh-150px)] overflow-hidden overflow-y-auto rounded-[50px] ">
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
        </div>
      </section>
    </main>
  );
};

import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const UserCard = ({
  userName,
  userEmail,
  userId,
  userAvatar,
  editbtn,
  deletebtn,
  eyebtn,
  onDelete,
  impersonateU,
}) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      onDelete(userId);
    } catch (error) {
      alert("erro ao deletar usuario", error);
    }
  };
  const handleImpersonateUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/impersonate",
        { user_id: impersonateU.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { access_token, user } = response.data;

      if (!localStorage.getItem("originalToken")) {
        localStorage.setItem("originalUser", localStorage.getItem("user"));
        localStorage.setItem("originalToken", localStorage.getItem("token"));
      }
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      alert(`voce logou como ${user.name}`);

      navigate("/home", { replace: true });
    } catch (error) {
      alert(`Erro ao tentar login: ${error}`);
    }
  };

  return (
    <div className="flex bg-cinza w-full pl-5 pt-2.5 pb-2.5 pr-5 border-b-1 border-gray-300">
      <div className="flex">
        <div className="bg-laranja flex items-center justify-center rounded-full h-12 w-12 mr-5">
          <img className="w-full h-full" src={userAvatar} alt={userName} />
        </div>
        <div>
          <p className="text-md font-medium text-gray-900 ">{userName}</p>
          <p className="truncate text-md text-gray-500">{userEmail}</p>
        </div>
      </div>
      <div className=" gap-3 flex-1 flex items-center justify-end">
        {eyebtn === true && (
          <button>
            <img
              className="cursor-pointer"
              src="/eye.svg"
              alt="Eye"
              onClick={handleImpersonateUser}
            />
          </button>
        )}

        {editbtn === true && (
          <Link to={`/update/${userId}`}>
            <button>
              <img
                className="bg-black p-1 rounded-full cursor-pointer"
                src="/note-pencil.svg"
                alt="EDITAR"
              />
            </button>
          </Link>
        )}

        {deletebtn === true && (
          <Link to={`/home`}>
            <button>
              <img
                className="bg-red-500 p-1 rounded-full cursor-pointer"
                src="/trash.svg"
                alt="DELETAR"
                onClick={handleDeleteUser}
              />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

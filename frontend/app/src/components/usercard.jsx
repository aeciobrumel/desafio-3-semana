import { Link } from "react-router-dom";

export const UserCard = ({ userName, userEmail, userAvatar }) => {
  return (
    <div className="flex bg-cinza w-full pl-5 pt-2.5 pb-2.5 pr-5 border-b-1 border-gray-300">
      <div className="bg-laranja flex items-center justify-center rounded-full h-12 w-12 mr-5">
        <img className="w-full h-full" src={userAvatar} alt={userName} />
      </div>
      <div>
        <p className="text-md font-medium text-gray-900 ">{userName}</p>
        <p className="truncate text-md text-gray-500">{userEmail}</p>
      </div>
    </div>
  );
};

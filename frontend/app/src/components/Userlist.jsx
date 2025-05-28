const Userlist = ({ users }) => {
  return (
    <div className="userlist">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id}>
            {user.name}({user.email}) - CPF {user.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userlist;

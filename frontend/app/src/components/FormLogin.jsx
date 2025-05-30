const FormLogin = () => {
  return (
    <form
      action=""
      className="flex flex-row items-center justify-center min-h-screen bg-gray-100"
    >
      <input type="text" placeholder="cpf" />
      <input type="password" placeholder="senha" />
      <button type="submit">Login</button>
    </form>
  );
};
export default FormLogin;

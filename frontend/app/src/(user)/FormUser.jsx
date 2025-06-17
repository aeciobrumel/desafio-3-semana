import { useEffect, useState } from "react";
import { InputForm } from "../components/ui/inputForm";
import { SelectPermission } from "../components/ui/selectPermission";

export const FormUser = ({ btnName, userEditing, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [permission, setPermission] = useState("");
  const [selectedFile, setSelectedFile]= useState();
  const handleFileChange=(e)=>{
    console.log(e.target.files)
    if(e.target.files && e.target.files > 0){
      const file = e.target.files[0];
      setSelectedFile(file)
    }
  }
  useEffect(() => {
    if (userEditing) {
      setName(userEditing.name || "");
      setEmail(userEditing.email || "");
      setCpf(formatCpf(userEditing.cpf) || "");
      setPermission(userEditing.permission || "");
    }
  }, [userEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    const payload = {
      name,
      email,
      cpf: unformatCpf(cpf),
      password,
      permission,
    };

    onSubmit(payload);
  };
  function unformatCpf(cpf) {
    return cpf.replace(/\D/g, "");
  }
  function formatCpf(cpf) {
    const onlynum = cpf.replace(/\D/g, "").slice(0, 11);
    return onlynum
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return (
    <form className="gap-1 flex flex-col items-center" onSubmit={handleSubmit}>
      <div className=" mt-5 bg-cinza max-h-[calc(100vh-80px)] rounded-[30px] p-5">
        <InputForm
          placeholder={"Nome"}
          type={"text"}
          value={name}
          onChange={setName}
        />
        <InputForm
          placeholder={"Email"}
          type={"email"}
          value={email}
          onChange={setEmail}
        />
        <InputForm
          placeholder={"CPF"}
          type={"text"}
          value={cpf}
          onChange={(value) => setCpf(formatCpf(value))}
        />
        <div className="flex">
          <InputForm
            placeholder={"Senha"}
            type={"password"}
            value={password}
            onChange={setPassword}
          />
          <InputForm
            placeholder={"Confirmar senha"}
            type={"password"}
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
        </div>
        <SelectPermission value={permission} onChange={setPermission} />
        <input type="file"
        onChange={handleFileChange} />
      </div>
      <button
        className="bg-verdeclaro mb-8 flex justify-center items-center cursor-pointer font-bold text-white  rounded-3xl  pl-2 p-1 mt-5 hover:bg-amber-500 hover:text-white focus:bg-amber-500 focus:text-white focus:outline-none focus:ring-0"
        type="submit"
      >
        {btnName}
      </button>
    </form>
  );
};

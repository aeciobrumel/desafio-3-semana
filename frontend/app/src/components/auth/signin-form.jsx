"use client";
//import { useNavigate } from "react-router-dom";
import { StrictMode, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const SigninForm = () => {
  const [cpfField, setCpfField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  function formatCpf(cpf) {
    const onlynum = cpf.replace(/\D/g, "").slice(0, 11);
    return (
      onlynum
        // remove tudo que não for número
        .replace(/(\d{3})(\d)/, "$1.$2") // coloca o primeiro ponto
        .replace(/(\d{3})(\d)/, "$1.$2") // segundo ponto
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    ); // traço no final
  }
  function unformatCpf(cpf) {
    return cpf.replace(/\D/g, "");
  }
  const handleEnterButton = async () => {
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        cpf: unformatCpf(cpfField),
        password: passwordField,
      }),
    });
    const json = await res.json();
    console.log(json);
    alert(json.access_token);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Input
        placeholder="CPF"
        value={cpfField}
        onChange={(value) => setCpfField(formatCpf(value))}
      />
      <Input
        placeholder="SENHA"
        type="password"
        value={passwordField}
        onChange={setPasswordField}
      />
      <Button label="fazer login" sizeH={"10"} onClick={handleEnterButton} />
    </div>
  );
};

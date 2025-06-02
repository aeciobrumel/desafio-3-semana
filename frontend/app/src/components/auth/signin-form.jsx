"use client";
import { useNavigate } from "react-router-dom";
import { StrictMode, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const [cpfField, setCpfField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const navigate = useNavigate();
  function formatCpf(cpf) {
    const onlynum = cpf.replace(/\D/g, "").slice(0, 11);
    return onlynum
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  function unformatCpf(cpf) {
    return cpf.replace(/\D/g, "");
  }
  const handleEnterButton = async () => {
    try {
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
      if (res.ok && json.access_token) {
        localStorage.setItem("token", json.access_token);
        localStorage.setItem("user", JSON.stringify(json.user));

        navigate("/home");
      } else {
        alert(json.error || "credenciais inválidas");
      }
    } catch (error) {
      console.error("erro ao fazer login: ", error);
      alert("Erro no login");
    }
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

"use client";
import { useState } from "react";

export const SigninForm = () => {
  const router = useRouter();
  const [cpfField, setCpfField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <div>
      <input
        placeholder="Digite seu CPF"
        value={cpfField}
        onChange={(e) => setCpfField(e.target.value)}
      />
    </div>
  );
};

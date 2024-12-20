import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <>
      <form action="submit">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={handleLogin} disabled={loading}>
          Login
        </button>
        {/* SE CONNECTER AVEC GOOGLE/ Apple ... */}
      </form>
    </>
  );
};

export default Login;

import FormLogin from "./components/FormLogin";
import Userlist from "./components/Userlist";
import { useEffect } from "react";
//import {conteudo} from '@/npmedapastadentrodesrc'
function Page() {
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <FormLogin />
    </div>
  );
}
export default Page;

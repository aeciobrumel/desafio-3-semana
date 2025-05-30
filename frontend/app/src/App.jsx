import FormLogin from "./components/FormLogin";
import Userlist from "./components/Userlist";
import LoginPage from "./(auth)/signin/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {conteudo} from '@/npmedapastadentrodesrc' itens sem default
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

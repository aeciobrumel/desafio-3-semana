import Userlist from "./components/Userlist";
import LoginPage from "./(auth)/signin/LoginPage";
import { HomePage } from "./(ui)/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import {conteudo} from '@/npmedapastadentrodesrc' itens sem default
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
export default App;

import LoginPage from "./(auth)/signin/LoginPage";
import { HomePage } from "./(ui)/HomePage";
import { UpdatePage } from "./(user)/UpdatePage";
import { StorePage } from "./(user)/StorePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import {conteudo} from '@/npmedapastadentrodesrc' itens sem default
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/create" element={<StorePage />} />
      <Route path="/update/:id" element={<UpdatePage />} />
    </Routes>
  );
}
export default App;

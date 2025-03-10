import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  //  estado incial en falso para que no aparezca al renderizar la pagina
  const [isOpen, setIsOpen] = useState(false);
  
  const handleModal = () => {
    setIsOpen(prev => !prev); 
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {isOpen && <Modal close={handleModal} content={'Contenido'} />}
        </header>

        <img src="/public/icon-user.png" alt="iconousuario" onClick={handleModal}>
        </img>

        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App
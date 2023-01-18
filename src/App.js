import logo from './logo.svg';
import './App.css';
import Formulario from './components/formulario';
import Contacto from "./components/contacto";
import { useEffect, useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts]);
  
  return (
    <div>
      <Formulario setContacts={setContacts}/>
      <Contacto/>
      </div>
    // <div><Contacto/></div>
  );
}

export default App;

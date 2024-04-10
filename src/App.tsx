import { type User } from "./types.d";
import { useEffect, useRef, useState } from "react";
import { UserList } from "./components/UserList";
import "./App.css";



function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [color, setColor] = useState(false);
  const originalUser = useRef<User[]>([])

  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then(async (res) => await res.json())
      .then((res) => {
        originalUser.current = res.results;
        setUsers(res.results);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);


  const restablecerEstado=()=>{
    setUsers(originalUser.current)
  }
  const handleRemove = (emai: string) => {
    const updateUser = users.filter((user) => user.email != emai);
    setUsers(updateUser);
  };

  const handleColor = () => {
    setColor(!color);
  };

  return (
    <>
      <section>
        <h1>Prueba tecnica</h1>
        <header>
          <button onClick={handleColor}>Cambiar Colores</button>
          <button onClick={restablecerEstado}>Restablecer estado</button>
        </header>
        <UserList handleColor={color} users={users} removeUser={handleRemove} />
      </section>
    </>
  );
}

export default App;

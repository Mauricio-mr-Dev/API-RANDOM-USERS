import { type User } from "../types.d";

interface Props {
  users: User[]
  removeUser :(email:string )=>void
  handleColor:boolean
}

export const UserList = ({ users, removeUser, handleColor}: Props) => {


  return (


    <table width='100%' className="">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Pais</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) => {

            const backgroundColor = index % 2 === 0 ? '#333' : '#555';
            const color = handleColor ? backgroundColor : 'transparent' 

          return (
            <tr key={user.email} style={{background:color}}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={()=>{
                    removeUser(user.email)
                }}>Eliminar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

import { Link } from "react-router";

export default function Users() {
  const userData = [
    { id: 1, name: "Imran" },
    { id: 2, name: "Kazim" },
    { id: 3, name: "Sajid" },
    { id: 4, name: "Saqlain" },
    { id: 5, name: "Hayat" },
    { id: 6, name: "Wazir" },
  ];
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User List Page</h1>
      {userData.map((item) => (
        <h4>
          <Link to={"/users/"+item.id}>
          {item.name}</Link>
        </h4>
      ))}
<hr /><br />
       <h1>User List Page with name in URL</h1>
      {userData.map((item) => (
        <h4>
          <Link to={"/users/"+item.id+"/"+item.name}>
          {item.name}</Link>
        </h4>
      ))}
    </div>
  );
}

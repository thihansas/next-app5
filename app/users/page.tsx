import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    // {next: { revalidate: 10 },
  }); //updates data every 10 seconds
  const users: User[] = await response.json();

  return (
    <div>
      <h1> Users </h1>
      <p> {new Date().toLocaleTimeString()} </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-white"> Name </th>
            <th className="text-white"> Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {" "}
              <td>{user.name} </td>
              <td>{user.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;

import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function UserTable() {
    const { users } = useContext(UserContext);
    
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Registered Users</h1>
            <table 
              border="1" 
              cellPadding="10" 
              style={{ borderCollapse: "collapse", width: "80%", margin: "20px auto" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => ( 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{'*'.repeat(user.password.length)}</td>
                        <td>{user.fullname}</td>
                        <td>{user.username}</td>
                    </tr>
                   ))}
                </tbody>
            </table>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Link to="/">Back to Signup</Link>
            </div>
        </div>
    );
}

export default UserTable;

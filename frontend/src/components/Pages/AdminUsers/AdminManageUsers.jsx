import React, { useEffect, useState } from "react";

const AdminManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const deleteUser = (username) => {
    fetch(`http://localhost:8080/api/users/${username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        alert("User deleted successfully.");
        setUsers(users.filter((user) => user.username !== username));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const banUser = (username) => {
    fetch(`http://localhost:8080/api/users/${username}/ban`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        alert("User banned successfully.");
        setUsers(
          users.map((user) =>
            user.username === username ? { ...user, active: false } : user
          )
        );
      })
      .catch((error) => console.error("Error banning user:", error));
  };

  return (
    <div className="container mt-4">
      <h3>Manage Users</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.active ? "Active" : "Banned"}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.username)}
                >
                  Delete
                </button>
                {!user.active && (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => banUser(user.username)}
                  >
                    Ban
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageUsers;

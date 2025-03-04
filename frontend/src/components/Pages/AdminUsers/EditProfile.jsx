import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    const username = localStorage.getItem("username");
    fetch(`http://localhost:8080/api/users/${username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/users/${user.username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(user),
    })
      .then(() => alert("Profile updated successfully."))
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div className="container mt-4">
      <h3>Edit Profile</h3>
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" value={user.username} readOnly />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleUpdate}>
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;

import React, { useState } from "react";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [description, setDescription] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (e) => {
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!e.target.value.match(emailReg)) setEmailError("Enter a valid email!");
    else setEmailError("");
    setEmail(e.target.value);
  };

  const validatePassword = (e) => {
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!e.target.value.match(passwordReg)) {
      setPasswordError(
        "Use 8+ characters with a mix of letters, numbers & symbols."
      );
    } else setPasswordError("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const _contact = parsePhoneNumber(contact);

    axios
      .post(`http://localhost:8080/api/auth/signup`, {
        firstName,
        lastName,
        username,
        email,
        contact,
        country: _contact?.country || "",
        password,
        description,
        stats: {
          totalCount: 0,
          verdicts: { ACCount: 0, WACount: 0, TLECount: 0, MLECount: 0, CECount: 0, RTECount: 0 },
          tags: {},
          difficulties: { easy: 0, medium: 0, hard: 0 },
        },
      })
      .then(() => setSignedUp(true))
      .catch((err) => {
        setLoading(false);
        toast.error(err.response?.data?.message || err.message, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };

  if (signedUp) return <Navigate to="/signin" />;

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center p-5">
      <ToastContainer />
      <div className="bg-white p-8 shadow-lg rounded-lg w-96 p-5">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please fill this form to create an account!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="form-control border p-2 rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-control border p-2 rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Username"
            className="form-control border p-2 rounded mt-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={`form-control border p-2 rounded mt-4 ${
              emailError ? "border-red-500" : ""
            }`}
            value={email}
            onChange={validateEmail}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <PhoneInput
            placeholder="Contact Number"
            className="form-control border p-2 rounded mt-4"
            value={contact}
            onChange={setContact}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={`form-control border p-2 rounded mt-4 ${
              passwordError ? "border-red-500" : ""
            }`}
            value={password}
            onChange={validatePassword}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <textarea
            placeholder="About Yourself"
            className="form-control border p-2 rounded mt-4"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-sm text-gray-600">
              I accept the terms and conditions.
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded mt-6 hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

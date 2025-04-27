// AuthForm.jsx
import React, { useState } from "react";
import "./AuthForm.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handler(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signup() {
    if (!user.email || !user.password || !user.name) {
      toast.error("Please fill in all fields..");
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Registration successful:", res.user);

      toast.success("Registration successful!");

      setTimeout(() => {
        navigate("/profile"); 
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    if (!user.email || !user.password) {
      toast.error("Fill in your email and password..");
      return;
    }

    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Login successful:", res.user);

      toast.success("You welcome!");

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Incorrect email or password.");
    } finally {
      setLoading(false);
    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Log in" : "Registration "}</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            isLogin ? login() : signup();
          }}
        >
          {!isLogin && (
            <div className="input-group">
              <label> Your Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handler}
                placeholder="Your Name"
                required
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              onChange={handler}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Wait..." : isLogin ? "Log in" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text" onClick={toggleForm}>
          {isLogin ? "Haven't registered yet?" : "Already registered? Log In"}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;

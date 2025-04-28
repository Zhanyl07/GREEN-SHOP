import React, { useState, useEffect } from "react";
import "./Account.scss";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import avatar from "../../assets/svg/avatar.svg";
import addres from "../../assets/svg/addres.svg";
import orders from "../../assets/svg/orders.svg";
import wishlist from "../../assets/svg/serdechko.svg";
import repost from "../../assets/svg/repost.svg";
import dowlands from "../../assets/svg/dowlands.svg";
import support from "../../assets/svg/support.svg";
import lagout from "../../assets/svg/lagout.svg"; 
import { Link } from "react-router-dom";
const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
      });
  };

  return (
    <div className="account-page">
      <aside className="sidebar">
        <h3>Hello, {user ? user?.user?.displayName : "Guest"}</h3> 
        <ul className="menu">
          <div className="flex">
            <img src={avatar} alt="Avatar" />
            <li className="active">Account Details</li>
          </div>
          <div className="flex">
            <img src={addres} alt="Address" />
            <li>Address</li>
          </div>
          <div className="flex">
            <img src={orders} alt="Orders" />
            <Link to={"/cart"}>
            <li>Orders</li>
            </Link>
          </div>
          <div className="flex">
            <img src={wishlist} alt="Wishlist" />
            <Link to={'/wishlist'}>
            <li>Wishlist</li>
            </Link>
          </div>
          <div className="flex">

            <img src={repost} alt="Reports" />
            <li>Reports</li>
          </div>
          <div className="flex">
            <img src={dowlands} alt="Downloads" />
            <li>Downloads</li>
          </div>
          <div className="flex">
            <img src={support} alt="Support" />
            <li>Support</li>
          </div>
        </ul>

        <div className="flex">
          <img src={lagout} alt="Logout Icon" />
          <button className="logout" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <main className="account-content">
        <section className="section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" defaultValue={user ? user.displayName : ""} />
            </div>
            <div className="form-group">
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" defaultValue={user ? user.displayName : ""} />
            </div>
            <div className="form-group">
              <label>
                Email address <span>*</span>
              </label>
              <input type="email" defaultValue={user ? user.email : ""} />
            </div>
            <div className="form-group phone-group">
              <label>
                Phone Number <span>*</span>
              </label>
              <div className="phone-input">
                <select>
                  <option>+996</option>
                  <option>+7</option>
                  <option>+1</option>
                </select>
                <input type="text" />
              </div>
            </div>
            <div className="form-group">
              <label>
                Username <span>*</span>
              </label>
              <input type="text" defaultValue={user ? user.displayName : ""} />
            </div>
            <div className="form-group photo-group">
              <label>Photo</label>
              <div className="photo-actions">
                <div className="photo-placeholder">
                  <img
                    src={
                      user ? user.photoURL : "https://via.placeholder.com/50"
                    }
                    alt="Avatar"
                  />
                </div>
                <div className="buttons">
                  <button className="btn-green">Change</button>
                  <button className="btn-plain">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Password Change</h2>
          <div className="form-group">
            <label>Current password</label>
            <div className="password-input">
              <input type="password" />
              <span className="icon-eye">👁️</span>
            </div>
          </div>
          <div className="form-group">
            <label>New password</label>
            <div className="password-input">
              <input type="password" />
              <span className="icon-eye">👁️</span>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm new password</label>
            <div className="password-input">
              <input type="password" />
              <span className="icon-eye">👁️</span>
            </div>
          </div>
        </section>

        <button className="save-btn">Save Changes</button>
      </main>
    </div>
  );
};

export default Account;

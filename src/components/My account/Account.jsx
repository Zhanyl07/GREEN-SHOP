
import React from "react";
import "./Account.scss";
import avatar from '../../assets/svg/avatar.svg'
import addres from "../../assets/svg/addres.svg"
import orders from "../../assets/svg/orders.svg"
import wishlist from "../../assets/svg/serdechko.svg"
import repost from "../../assets/svg/repost.svg"
import dowlands from "../../assets/svg/dowlands.svg"
import support from "../../assets/svg/support.svg"
import lagout from "../../assets/svg/lagout.svg"

const Account = () => {
  return (
    <div className="account-page">
      <aside className="sidebar">
        <h3>My Account</h3>
        <ul className="menu">
          <li className="active">Account Details</li>
          <img src={avatar} alt="" />
          <li>Address</li>
          <img src={addres} alt="" />
          <li>Orders</li>
          <img src={orders} alt="" />
          <li>Wishlist</li>
          <img src={wishlist} alt="" />
          <li>Reports</li>
          <img src={repost} alt="" />
          <li>Downloads</li>
          <img src={dowlands} alt="" />
          <li>Support</li>
          <img src={support} alt="" />
        </ul>
        <button className="logout">Logout</button>
        <img src={lagout} alt="" />
      </aside>

      <main className="account-content">
        <section className="section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name <span>*</span></label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Last Name <span>*</span></label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email address <span>*</span></label>
              <input type="email" />
            </div>
            <div className="form-group phone-group">
              <label>Phone Number <span>*</span></label>
              <div className="phone-input">
                <select>
                  <option>+966</option>
                  <option>+7</option>
                  <option>+1</option>
                </select>
                <input type="text" />
              </div>
            </div>
            <div className="form-group">
              <label>Username <span>*</span></label>
              <input type="text" />
            </div>
            <div className="form-group photo-group">
              <label>Photo</label>
              <div className="photo-actions">
                <div className="photo-placeholder">
                  <img src="https://via.placeholder.com/50" alt="Avatar" />
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
          <h2>Password change</h2>
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

        <button className="save-btn">Save Change</button>
      </main>
    </div>
  );
};

export default Account;

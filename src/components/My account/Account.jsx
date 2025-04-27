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
import React from 'react'
import person from '../../assets/svg/person.svg'
import './Account.scss'

function Account() {
  return (
    <div className='account'>
        <div className="left-acc">
            <h2>My Account</h2>
            <div className="img-text">
              <svg
                className="icon"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0C3.96 0 2.32 1.63 2.32 3.65C2.32 5.67 3.96 7.3 6 7.3C8.03 7.3 9.67 5.67 9.67 3.65C9.67 1.63 8.03 0 6 0ZM3.48 3.65C3.48 2.27 4.61 1.15 6 1.15C7.38 1.15 8.51 2.27 8.51 3.65C8.51 5.03 7.38 6.15 6 6.15C4.61 6.15 3.48 5.03 3.48 3.65ZM4.09 8.84C1.83 8.84 0 10.66 0 12.91C0 13.33 0.15 13.87 0.67 14.15C1.36 14.52 2.85 15 6 15C9.14 15 10.63 14.52 11.32 14.15C11.84 13.87 12 13.33 12 12.91C12 10.66 10.16 8.84 7.9 8.84L4.09 8.84ZM1.16 12.91C1.16 11.3 2.47 10 4.09 10L7.9 10C9.52 10 10.83 11.3 10.83 12.91C10.83 13 10.82 13.06 10.8 13.09C10.79 13.12 10.78 13.13 10.77 13.14C10.32 13.38 9.05 13.84 6 13.84C2.94 13.84 1.67 13.38 1.22 13.14C1.21 13.13 1.2 13.12 1.19 13.09C1.17 13.06 1.16 13 1.16 12.91Z"
                  fill="currentColor"
                />
              </svg>
              <p>Account Details</p>
            </div>
        </div>
        <div className="right-acc"></div>
    </div>
  )
}

export default Account

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
                  <option>+996</option>
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

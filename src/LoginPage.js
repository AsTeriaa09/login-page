import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="col-1"></div>

        <div className="col-2">
          <div className="login-box">
            <form action="submit">
              <div className="logo">
                <img src="/images/dentalytis_preview_rev_1.png" alt="" />
              </div>
              <div className="user-box">
                <input type="email" placeholder="Email" required />
              </div>

              <div className="user-box">
                <input type="password" placeholder="Password" required />
              </div>

              <div className="forget-pass">
                <Link to="#" className="link">
                  <p>forgot password?</p>
                </Link>
              </div>

              <Link to="#">
                <button type="submit">Login</button>
              </Link>

              <div className="sign-up">
                <span> Don't have an account?</span>{" "}
                <Link to="#" className="link">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

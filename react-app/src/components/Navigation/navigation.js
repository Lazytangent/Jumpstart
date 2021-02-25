import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import LogoutButton from "../auth/LogoutButton";
import SearchBar from "../SearchBar/SearchBar";
import { useModalContext } from "../../context/Modal";
import CreateProject from "../CreateProject";
import { useHistory } from "react-router-dom";
import "./navigation.css";
import "../HomePage/homePage.css";

const Navigation = ({ setAuthenticated, setShowModal }) => {
  const {
    showLoginModal,
    setShowLoginModal,
    showSignUpModal,
    setShowSignUpModal,
    showSearchBarModal,
    setShowSearchBarModal,
  } = useModalContext();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  return (
    <nav>
      <ul className="navigation">
        <div className="navigation-first-fraction">
          <div>
            {!user && (
              <button
              id="navigation-buttons"
              className="navigation-buttons-login"
                onClick={() => {
                  setShowSignUpModal(false);
                  setShowLoginModal((prev) => !prev);
                }}
              >
                Login
              </button>
            )}
            {showLoginModal && (
              <LoginForm setAuthenticated={setAuthenticated} />
            )}
          </div>
          <div>
            {!user && (
              <button
              id="navigation-buttons"
              className="navigation-buttons-signup"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignUpModal((prev) => !prev);
                }}
              >
                Sign Up
              </button>
            )}
            {showSignUpModal && (
              <SignUpForm setAuthenticated={setAuthenticated} />
            )}
          </div>
        </div>
        <div className="navigation-second-fraction">
          <NavLink
            className="navigation-home"
            to="/"
            exact={true}
            activeClassName="active"
            onClick={() => {
              setShowSignUpModal(false);
              setShowLoginModal(false);
            }}
          >
            JumpStart<img className="navigation-logo" src="logo.png" alt=""></img>
          </NavLink>
        </div>
        <div className="navigation-third-fraction">
          <div>
            <button
              id="navigation-buttons"
              className="navigation-buttons-create"
              onClick={() => {
                if (user) {
                  setShowLoginModal(false);
                  setShowSignUpModal(false);
                  history.push("/new-project");
                } else {
                  setShowLoginModal((prev) => !prev);
                  setShowSignUpModal(false);
                }
              }}
            >
              Create a project
            </button>
          </div>
          <div>
            {
              <button
              id="navigation-buttons"
              className="navigation-buttons-search"
                onClick={() => {
                  setShowSignUpModal(false);
                  setShowLoginModal(false);
                  setShowSearchBarModal((prev) => !prev);
                }}
              >
                Search
              </button>
            }
            {showSearchBarModal && <SearchBar />}
          </div>
        </div>

        <div>
          {user && <LogoutButton setAuthenticated={setAuthenticated} />}
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
import React from "react";
import styled from "styled-components";
import Logo from "./logo.png";

//Router
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { purge } from "../../redux/redux";

//------------------------------------------------------------//

const Nav = () => {
  //HOOKS init
  //State from store
  const userData = useSelector((state) => state.user);
  //Dispatch
  const dispatch = useDispatch();

  return (
    <NAV className="main-nav">
      <Link className="logo" to="/">
        <LOGO src={Logo} alt="Argent Bank Logo" />
        <SRONLY>Argent Bank</SRONLY>
      </Link>

      {!userData.isAuth ? (
        <LOGIN>
          <Link className="item" to="/user/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </LOGIN>
      ) : (
        <LOGOUT>
          <Link className="item" to="user/profile">
            <span className="fa fa-user-circle user"></span>
            <span className="name">{userData.firstName}</span>
          </Link>
          <Link
            className="item"
            to="/"
            onClick={() => {
              //INITIAL_STATE from Store
              dispatch(purge());
            }}
          >
            <i className="fa fa-sign-out out"></i>
            Sign Out
          </Link>
        </LOGOUT>
      )}
    </NAV>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const SRONLY = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    align-items: center;
  }

  .item {
    text-decoration: none;
    margin-right: 0.5rem;

    .fa {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }

    i {
      margin-right: 4px;
    }

    :hover {
      text-decoration: underline;

      .logo {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const LOGO = styled.img`
  max-width: 100%;
  width: 200px;
`;

const LOGIN = styled.div``;

const LOGOUT = styled.div`
  display: flex;
  align-items: center;

  .name {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 25px;
  }

  .user {
    color: #2c3e50;
    margin-right: 5px;
  }

  .out {
    font-size: 1.5rem;
  }
`;

export default Nav;

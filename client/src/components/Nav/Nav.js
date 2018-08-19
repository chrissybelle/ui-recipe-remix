import React from "react";
import Login from "../Login";
import { Col, Row, Container } from "../../components/Grid";
import { withMultiContext } from "with-context";
import { AppContext } from '../../components/AppProvider/AppProvider.js';
import "./nav.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: true
    }
  }

  render() {
    return (
      // <Container fluid>
      //   <Row>
      <div className="navBar">
        {/* <Col size="md-8">a
          </Col>
          <Col size="md-3">a */}

        <ul className="nav">
          <li className="navItem" >
            <a className={window.location.pathname === "/home" ? "active-navLink" : "navLink"} href="/home">Home</a>
          </li>
          <li className="navItem">
            <a className={window.location.pathname === "/edamam" ? "active-navLink" : "navLink"} href="/edamam">Search</a>
          </li>
          <li className="navItem">
            <a className={window.location.pathname === "/your-recipes" ? "active-navLink" : "navLink"} href="/your-recipes">Your Recipes</a>
          </li>

          <li className="loginSection">
            <Login className="loginBtn" />
          </li>

        </ul>


        {/* </Col> */}
      </div>
      //   </Row>
      // </Container>
    );
  }
}
// const Nav = () =>
//   <nav className="navbar navbar-expand-lg">
//     <a className="navbar-brand" href="">
//       <img id="logo" src="/images/YourPerfectRecipe.png" width="50" height="50"
//         className="d-inline-block align-top" alt="" />  <h2 className="navBrand">Your Perfect Recipes!</h2></a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
//       aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarText">
//       <ul className="navbar-nav mr-auto">
//         <li className={window.location.pathname === "/home" ? "active nav-item" : "nav-item"} >
//           <a className="navLink" href="/home">Home</a>
//         </li>
//         <li className={window.location.pathname === "/edamam" ? "active nav-item" : "nav-item"}>
//           <a className="navLink" href="/edamam">Search</a>
//         </li>
//         <li className={window.location.pathname === "/your-recipes" ? "active nav-item" : "nav-item"}>
//           <a className="navLink" href="/your-recipes">Your Recipes</a>
//         </li>

//       </ul>
//       <span className="navbar-text">
//         <Login />
//       </span>
//     </div>
//   </nav>;

export default withMultiContext({ appContext: AppContext })(NavBar);

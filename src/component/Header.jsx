import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { keluarDariApps } from "../authentication/firebase";
import image from "../assets/images/logocnn.png";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
export default function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const buttonLogoutOnClickHandler = async () => {
      await keluarDariApps();
    navigate("/");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" width="40em" style={{ marginRight: "5em" }} src={image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}} to="/">HOME</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}} to="/">NEW AND POPULAR</Link></Nav.Link> 
            
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link style={{color: 'white',}}  disabled>{user !== null ? user.email : ""}</Nav.Link>
            <Nav.Link >{user !== null ? <Button variant="contained" onClick={buttonLogoutOnClickHandler}>Logout</Button> : <Link type="button" class="btn btn-success" style={{textDecoration: 'none', color: 'white'}} to="/Login">Login</Link>}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

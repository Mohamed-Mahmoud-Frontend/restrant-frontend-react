import React from 'react';
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import { Link } from 'react-router-dom';
    import  './Navbar.css'
const Navigitionbar = () => {
  return (
        <>
        <Navbar bg="light" expand="lg">
        <Container >
            <Link className='img_logo' to="/" ><img src="images/logo.png" alt=""/></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav               
          className="ms-auto my-2 my-lg-0 "
            >
          <Link className='Text-color' to="/">Home</Link>
          <Link className='Text-color' to="../section/About">About Us</Link>
          <Link className='Text-color' to="/#Explore food">Explore food</Link>
          <Link className='Text-color' to="/#Reviews">Reviews</Link>
          <Link className='Text-color' to="/#FaQ">FaQ</Link>
          <button className='btn-Nav'>1800 789 123</button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  </>
      );
    }
export default Navigitionbar

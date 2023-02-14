import { Navbar, Nav, Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#">
          <Image src="logo.png" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="fw-bold lh-1">
              Home <span className="sr-only">(current)</span>
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

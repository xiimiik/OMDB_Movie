import Link from "next/link";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar className="d-flex align-items-center h-10" color="dark" dark>
      <NavbarBrand href="/" className="d-flex align-items-center">
        <img
          alt="logo"
          src="../static/movielogo.png"
          style={{
            height: 40,
            width: 40,
          }}
        />
        OMDB Movie
      </NavbarBrand>

      <Link href="/favorites" className="text-light">
        Favorites
      </Link>
    </Navbar>
  );
};

export default Header;

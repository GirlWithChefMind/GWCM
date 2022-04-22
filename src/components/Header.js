import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  //const [state, setstate] = useState(initialState);

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/ " className="mx-auto">
          Girl With Chef Mind
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

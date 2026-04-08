import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.status.authStatus);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header>
      <Container>
        <div className="w-full flex items-center justify-between py-4">
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>
        <ul>
          {navItems.map((item) => {
            return item.active ? (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </Link>
              </li>
            ) : null;
          })}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const homeLink = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Blog",
    path: "/About-Blog",
  },
  {
    title: "Contact Us",
    path: "/Contact-Us",
  },
  {
    title: "Login",
    path: "/login-us",
  },
];
export default function Home() {
  return (
    <div className="snow">
        <div className="snow__item"></div>
        <div className="snow__item"></div>
        <div className="snow__item"></div>
      <span>Blogs Du lịch</span>
      <ul>
        {homeLink.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    
  );
}

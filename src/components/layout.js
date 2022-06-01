import { Link } from "gatsby";
import React from "react";

import {
  container,
  heading,
  navLinks,
  navlinkItem,
  navlinkText,
} from "./layout.module.css";

function Layout({ pageTitle, Children }) {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navlinkItem}>
            <Link className={navlinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navlinkItem}>
            <Link className={navlinkText} to="/about">
              about
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {Children}
      </main>

      <div>Copyright All Rights</div>
    </div>
  );
}

export default Layout;

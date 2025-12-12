"use client"

import Link from "next/link";
import "./DrNavbar.scss";
import { space_mono, dm_sans } from '../fonts/fonts';
import { DrNavLink } from "./DrNavLink";
import { DrButton } from "./DrButton";

const DrNavbar = () => {
  return (
    <>
      <div className="DrNavbar">
        <div className="DrNavbar__container">
            <Link className={`${space_mono.className} logo-title`} href="/">Dr<span>.</span>Haki</Link>
            <ul className="DrNavbar__container__list">
              <li>
                <DrNavLink href="/">SHOWCASE</DrNavLink>
              </li>
              <li>
                <DrNavLink href="/log">LOG</DrNavLink>
              </li>
              <li>
                <DrNavLink href="/about">ABOUT</DrNavLink>
              </li>
            </ul>
            <DrButton variant="primary">Sign up</DrButton>
        </div>
      </div>
    </>
  );
};

export default DrNavbar;

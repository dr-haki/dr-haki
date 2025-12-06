import Link from "next/link";
import "./DrNavbar.scss";
import { space_mono, dm_sans } from '../fonts/fonts';

const DrNavbar = () => {
  return (
    <>
      <div className="DrNavbar">
        <div className="DrNavbar__container">
            <Link className={`${space_mono.className} logo-title`} href="/">Dr<span>.</span>Haki</Link>
            <ul className="DrNavbar__container__list">
              <li>
                <Link aria-current="page" className={`${space_mono.className} nav-link`} href="/">
                    SHOWCASE 
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <p>LOGS</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>ABOUT</p>
                </Link>
              </li>
            </ul>
            <button>Button</button>
        </div>
      </div>
    </>
  );
};

export default DrNavbar;
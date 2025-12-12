import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import DrNavbar from "./components/DrNavbar";
import DrHeroSection from "./components/DrHeroSection";

export default function Home() {
  return (
     <main>
      <div className="page-wrapper landing-page">
          <div className="landing-page__container">
            <DrNavbar />
            <hr />
            <DrHeroSection />
        </div>
      </div>
    </main>
  );
}

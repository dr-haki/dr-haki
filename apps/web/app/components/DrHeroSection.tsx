"use client"

import { useRouter } from 'next/navigation';
import { space_mono, dm_sans } from '../fonts/fonts';
import { DrButton } from './DrButton';
import "./DrHeroSection.scss";

const DrHeroSection = () => {

    const router = useRouter();

    const navigateToLogs = () => {
       router.push('/logs'); // Navigate to the Logs page
    };
  
  return (
    <main className="HeroSection">
        <section className="HeroSection__container">
            <p className="japanese-subtitle" >技術と自然を融合させてスーパーフードを育てる。</p>
            <div className="HeroSection__title">
                <h1 className={`heading heading--hero ${space_mono.className}`}>
                Mixing Technology and <br /> Nature to grow super food.
                </h1>
            </div>
            <p className={`${dm_sans.className} HeroSection__description`}>
                Follow the process on Dr. Haki Logs, <br />
                or track your Microgreens with the beta version of the HakiGrow app. 
            </p>
            <div className="HeroSection__buttons">
                <DrButton variant="primary" onClick={navigateToLogs}>Get Started</DrButton>
                <DrButton variant="secondary" onClick={navigateToLogs}>Explore the logs</DrButton>
            </div>
        </section>
    </main>
  );
};

export default DrHeroSection;


import { space_mono, dm_sans } from '../fonts/fonts';
import "./DrHeroSection.scss";

const DrHeroSection = () => {
  return (
    <main className="HeroSection">
        <section className="HeroSection__container">
            <p className="japanese-subtitle" >技術と自然を融合させてスーパーフードを育てる。</p>
            <div className="HeroSection__title">
                <div className={`${space_mono.className}`}>
                Mixing Technology and <br /> Nature to grow super food.
                </div>
            </div>
            <p className={`${dm_sans.className} HeroSection__description`}>
                Follow the process on Dr. Haki Logs, <br />
                or track your Microgreens with the beta version of the Command Deck. 
            </p>
            <div className="HeroSection__buttons">
                <button className="HeroSection__buttons__primary">
                Get Started
                </button>
                <button
                className="HeroSection__buttons__secondary"
                >
                Explore the logs
                </button>
            </div>
        </section>
    </main>
  );
};

export default DrHeroSection;
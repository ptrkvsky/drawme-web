import React from "react";
import { WrapperFooter, Infos, Goodbye, Socials } from "./style";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <WrapperFooter>
      <Infos className="infos">
        <a target="_blank" className="mail" href="mailto:melody.abdelnour@gmail.com">
          melody.abdelnour@gmail.com
        </a>
        <p className="baseline">Drawing from Nice, France to all around the world</p>
        <p className="developer">
          <span className="highlight">Développement :</span>{" "}
          <a target="_blank" href="https://developpeur-web.tech/">
            Kovsky
          </a>
        </p>
      </Infos>
      <Socials className="socials">
        <div className="social instagram">
          <StaticImage src="../../assets/images/instagram.png" alt="Instagram" />
        </div>
        <div className="detail">
          <p>
            <span className="highlight"> Insta:</span> drawmeasheep
          </p>
          <p>
            <span className="highlight">Mascotte:</span> Sheepoteur
          </p>
          <p>
            <span className="highlight">©drawmeasheep</span>
          </p>
        </div>
      </Socials>
      <Goodbye>
        <h2 className="title">Can’t wait to draw with you !</h2>
      </Goodbye>
    </WrapperFooter>
  );
};

export default Footer;

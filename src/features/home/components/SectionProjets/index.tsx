import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import { Section, Title } from "./style";

const SectionProjets = () => {
  const refSectionProjets = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: refSectionProjets.current,
        },
      })
      .to(`#canvas-black`, {
        opacity: 0,
        duration: 1,
      });
  }, []);

  return (
    <Section ref={refSectionProjets}>
      <div className="wrapper-description-title">
        <Title>What would i draw for you ?</Title>
        <p className="description">
          Drawmeasheep is an innovative graphic studio. It was a created by Mélody A.Nour, a
          freelance graphic designer that has always been passionate in all kinds of visual arts.
          The studio also provides you with all kind of graphic & web services. The goal is to be
          able to create a very unique identity for your brand. Let’s make your creative project
          happen.
        </p>
      </div>
      <div className="wrapper-illustration-title website" data-speed="0.95">
        <div className="relative">
          <h3 className="sub-title">Website</h3>
          <div className="illustration">
            <StaticImage
              src="../../../../assets/images/illustration_website.png"
              alt="Illustration website"
            />
          </div>
        </div>
      </div>
      {/* <div className="wrapper-illustration-title layout" data-speed="0.85">
				<div className="illustration">
					<StaticImage
						src="../../../../assets/images/illustration_layout.png"
						alt="Illustration layout"
					/>
				</div>
			</div> */}

      <div className="wrapper-illustration-title packaging" data-speed="1.03">
        <h3 className="sub-title">Packaging</h3>
        <div className="relative">
          <div className="illustration">
            <StaticImage
              src="../../../../assets/images/illustration_packaging.png"
              alt="Illustration packaging"
            />
          </div>
        </div>
      </div>

      <div className="wrapper-illustration-title social" data-speed="0.95">
        <div className="relative">
          <h3 className="sub-title">Social networks</h3>
          <div className="illustration">
            <StaticImage
              src="../../../../assets/images/illustration_social.png"
              alt="Illustration social"
            />
          </div>
        </div>
      </div>

      <div className="wrapper-illustration-title logo" data-speed="0.90">
        <div className="illustration">
          <StaticImage
            src="../../../../assets/images/illustration_logo.png"
            alt="Illustration logo"
          />
        </div>
        <h3 className="sub-title">Logotype</h3>
      </div>

      <div className="wrapper-illustration-title identity">
        <div className="relative">
          <h3 className="sub-title">Identity</h3>
          <div className="illustration">
            <StaticImage
              src="../../../../assets/images/illustration_identity.png"
              alt="Illustration identity"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionProjets;

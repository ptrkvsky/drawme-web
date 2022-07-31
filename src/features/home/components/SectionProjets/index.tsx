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
          markers: false,
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
      <div className="wrapper-illustration-title website">
        <div className="relative">
          <h3 className="sub-title" data-speed="0.93" data-lag="0.04">
            Website
          </h3>
          <div className="illustration" data-speed="1.07" data-lag="0.05">
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

      <div className="wrapper-illustration-title packaging">
        <h3 className="sub-title" data-speed="0.95" data-lag="0.05">
          Packaging
        </h3>
        <div className="relative" data-speed="1.02" data-lag="0.04">
          <div className="illustration">
            <StaticImage
              src="../../../../assets/images/illustration_packaging.png"
              alt="Illustration packaging"
            />
          </div>
        </div>
      </div>

      <div className="wrapper-illustration-title social" data-speed="0.95" data-lag="0.05">
        <div className="relative">
          <h3 className="sub-title" data-speed="0.95" data-lag="0.05">
            Social networks
          </h3>
          <div className="illustration" data-speed="1.05" data-lag="0.04">
            <StaticImage
              src="../../../../assets/images/illustration_social.png"
              alt="Illustration social"
            />
          </div>
        </div>
      </div>

      <div className="wrapper-illustration-title logo">
        <div className="illustration" data-speed="0.98" data-lag="0.04">
          <StaticImage
            src="../../../../assets/images/illustration_logo.png"
            alt="Illustration logo"
          />
        </div>
        <h3 className="sub-title" data-speed="1.1" data-lag="0.05">
          Logotype
        </h3>
      </div>

      <div className="wrapper-illustration-title identity">
        <div className="relative">
          <h3 className="sub-title" data-speed="0.93" data-lag="0.04">
            Identity
          </h3>
          <div className="illustration" data-speed="0.95" data-lag="0.05">
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

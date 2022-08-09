import React from "react";
import { graphql, PageProps } from "gatsby";
import { Project } from "../../interfaces/Project";
import { Layout } from "../../../../components";
import Colors from "../Colors";
import MainImages from "../MainImages";
import PresentationClient from "../PresentationClient";
import Typography from "../Typography";
import DrawMeA from "../DrawMeA";
import { useAppDispatch } from "../../../../redux/hooks";
import { setIsBlacked } from "../../../app/slices/appSlice";
import { Wrapper, WrapperSection1, WrapperColLeft, WrapperColRight } from "./style";
import { setColor } from "../../slices/projectSlice";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    sanityProject: sanityProject(id: { eq: $id }) {
      id
      drawMeA
      color1
      color2
      color3
      drawMeA
      mainImages {
        asset {
          gatsbyImageData
        }
      }
      excerpt {
        children {
          _key
          _type
          text
          marks
        }
        style
        list
        _type
        _key
      }
      quote {
        text
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      typographie {
        asset {
          gatsbyImageData
        }
      }
      categories {
        title
      }
    }
  }
`;

type DataProps = {
  sanityProject: Project;
};

const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const project = data && data.sanityProject;
  const dispatch = useAppDispatch();
  // Set background for the header
  dispatch(setIsBlacked());
  dispatch(setColor(project.color1));

  return (
    <Layout>
      <Wrapper className="template__wrapper">
        <WrapperSection1 className="template-container">
          <WrapperColLeft>
            <DrawMeA drawMeA={project.drawMeA} />
            <MainImages images={project.mainImages} />
          </WrapperColLeft>
          <WrapperColRight>
            <PresentationClient text={project.excerpt} />
            <Colors color1={project.color1} color2={project.color2} color3={project.color3} />
            <Typography image={project.typographie.asset} />
          </WrapperColRight>
        </WrapperSection1>
      </Wrapper>
    </Layout>
  );
};

export default ProjectTemplate;

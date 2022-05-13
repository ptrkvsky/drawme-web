import React from "react";
import { graphql, PageProps } from "gatsby";
import { Project } from "../interfaces/Project";
import Layout from "../../../containers/layout";
import Colors from "./Colors";
import MainImages from "./MainImages";
import PresentationClient from "./PresentationClient";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    sanityProject: sanityProject(id: { eq: $id }) {
      id
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
      categories {
        title
      }
    }
  }
`;

type DataProps = {
  sanityProject: Project;
};

//
const ProjectTemplate = ({ data }: PageProps<DataProps>) => {
  const project = data && data.sanityProject;
  debugger;
  return (
    <>
      <Layout>
        <PresentationClient text={project.excerpt} />
        <MainImages images={project.mainImages} />
        <Colors color1={project.color1} color2={project.color2} color3={project.color3} />
      </Layout>
    </>
  );
};

export default ProjectTemplate;

import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, Footer, GraphQLErrorList } from "../components";
import Hero from "../features/home/components/Hero";
import SectionProjets from "../features/home/components/SectionProjets";
import SectionDraw from "../features/home/components/SectionDraw";
import SectionPresentation from "../features/home/components/SectionPresentation";
import Canvas from "../features/home/components/Canvas";
import SectionDrawTogether from "../features/home/components/SectionDrawTogether";
import SectionKnowMeBetter from "../features/home/components/SectionKnowMeBetter";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sanityHome {
      title
      introPresentation
      introDetail
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
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

          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props: any) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  // const projectNodes = (data || {}).projects
  // 	? mapEdgesToNodes(data.projects)
  // 		.filter(filterOutDocsWithoutSlugs)
  // 		.filter(filterOutDocsPublishedInTheFuture)
  // 	: [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <>
      <Canvas />
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Hero />
        <SectionPresentation presentation={data.sanityHome} />
        <SectionDraw />
        <SectionProjets />
        <SectionDrawTogether />
        <SectionKnowMeBetter />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;

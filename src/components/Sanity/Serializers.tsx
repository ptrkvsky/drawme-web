const BasePortableText = require(`@sanity/block-content-to-react`);
import slugify from "../../";

import { Link } from "gatsby";

const Serializers = () => {
  const serializers = {
    types: {
      block: (props: any) => {
        if (props.node.style === `h2`) {
          let slug = ``;
          if (typeof props.children[0] === `string`) {
            slug = props.children[0];
          }

          return (
            <h2 className="title" id={slugify(slug.toString())}>
              {props.children}
            </h2>
          );
        }
        if (props.node.style === `h3`) {
          typeof props.children[0] === `string` ? (
            <h3 className="title" id={slugify(props.children[0].toString())}>
              {props.children}
            </h3>
          ) : (
            <h3>{props.children}</h3>
          );
        }
        if (props.node.style === `h4`) {
          return (
            <h4 className="title" id={slugify(props.children[0].toString())}>
              {props.children}
            </h4>
          );
        }
        if (props.node.style === `h5`) {
          return (
            <h5 className="title" id={slugify(props.children[0].toString())}>
              {props.children}
            </h5>
          );
        }
        if (props.node.style === `h6`) {
          return (
            <h6 className="title" id={slugify(props.children[0].toString())}>
              {props.children}
            </h6>
          );
        }

        return BasePortableText.defaultSerializers.types.block(props);
      },
    },

    marks: {
      internalLink: ({ mark, children }: any) => {
        console.log(mark.reference.slug.current);

        return (
          <Link to={`/${mark.reference.slug.current}`}>
            <a>{children}</a>
          </Link>
        );
      },
      link: ({ mark, children }: any) => {
        const { blank, href, cloaked, sponsored, noreferrer, ugc } = mark;
        const propsLink = {
          rel: ` `,
          target: ` `,
        };

        if (blank) {
          propsLink.target = `_blank`;
          propsLink.rel += `noopener noreferrer`;
        }

        if (sponsored) {
          propsLink.rel += ` sponsored`;
        }

        if (noreferrer) {
          propsLink.rel += ` noreferrer`;
        }

        if (ugc) {
          propsLink.rel += ` ugc`;
        }

        if (cloaked) {
          return <CloakLink url={href}>{children}</CloakLink>;
        }
        return (
          <a href={href} {...propsLink}>
            {children}
          </a>
        );
      },
    },
  };
  return serializers;
};

export default Serializers;

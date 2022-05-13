import { PortableText } from "@portabletext/react";
import React from "react";

interface Props {
  text: any;
}

const PresentationClient = ({ text }: Props) => {
  console.log(text);
  return <div style={{ fontSize: "2.4rem" }}>{<PortableText value={text} />}</div>;
};

export default PresentationClient;

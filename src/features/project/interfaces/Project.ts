import { IGatsbyImageData } from "gatsby-plugin-image";
import { Quote } from "./Quote";
import { Category } from "./Category";

export interface Project {
  id: string;
  color1: string;
  color2: string;
  color3: string;
  drawMeA: string;
  mainImages: [
    {
      asset: IGatsbyImageData;
    }
  ];
  excerpt: any[];
  quote: Quote[];
  categories: Category[];
}

import React, { FC } from 'react';
import { Project } from '../../../interfaces/Project';
import Colors from '../../Colors';
import DrawMeA from '../../DrawMeA';
import MainImages from '../../MainImages';
import PresentationClient from '../../PresentationClient';
import Typography from '../../Typography';
import {
  WrapperCols,
  WrapperColLeft,
  WrapperColRight,
  BackgroundColor,
} from './style';

interface Props {
  project: Project;
}

const SectionProjectOverview: FC<Props> = ({ project }) => {
  return (
    <BackgroundColor className="relative">
      <WrapperCols className="template-container">
        <WrapperColLeft>
          <DrawMeA drawMeA={project.drawMeA} />
          <MainImages images={project.mainImages} />
        </WrapperColLeft>
        <WrapperColRight>
          <PresentationClient text={project.excerpt} color={project.color1} />
          <Colors
            color1={project.color1}
            color2={project.color2}
            color3={project.color3}
          />
          <Typography image={project.typographie.asset} />
        </WrapperColRight>
      </WrapperCols>
    </BackgroundColor>
  );
};

export default SectionProjectOverview;

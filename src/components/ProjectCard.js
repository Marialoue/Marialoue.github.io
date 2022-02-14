import Card from "./Card";
import Chip from "./Chip";
import Button from "./Button";
import { SmallContainer } from "./Container";

import GithubIcon from "../assets/icons/Github";
import ExternalLinkIcon from "../assets/icons/ExternalLink";

const ProjectCard = ({ projectItem }) => {

  return (
    <Card>
      <h3>{projectItem.title}</h3>
      {/* <img src={projectItem.img.url} alt={projectItem.img.alt} /> */}
      <p>{projectItem.description}</p>
      <SmallContainer>
        {projectItem.stack.map((element, index) => (
          <Chip key={index}>{element}</Chip>
        ))}
      </SmallContainer>
      <SmallContainer>
        <Button as="a" href={projectItem.urls.github}>
          <GithubIcon />
        </Button>
        {projectItem.urls.external ? (
          <Button as="a" href={projectItem.urls.external}>
            <ExternalLinkIcon />
          </Button>
        ) : null}
      </SmallContainer>
    </Card>
  );
};
export default ProjectCard;

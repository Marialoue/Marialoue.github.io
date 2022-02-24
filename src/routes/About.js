import React from "react";

import Image from "../components/Image";
import Title from "../components/Title";
import GridContainer from "../components/GridContainer";
import { Container, SmallContainer } from "../components/Container";

import Profile from "../assets/images/IMG_0151_srgb-3.jpg";
import PinIcon from "../assets/icons/Pin";
import BookIcon from "../assets/icons/Book";
import PetIcon from "../assets/icons/Pet";

const About = () => {
  return (
    <Container>
      <Title>Hello hi, I'm Maria</Title>
      <GridContainer>
        <Image role="img" src={Profile} alt="Maria Karlsson" tabIndex="0" />
        <SmallContainer>
          <p>
            I started my tech journey 2019, when I applied to become a system
            developer within IoT. Even though I enjoyed learning about hardware,
            network communication, databases and automation, I found a passion
            for web development, accessibility and UI. Currently my main focus
            has been working with React, but I'm always interested in learning
            more about other frontend frameworks.
          </p>
          <p>
            When I'm not working on a coding project, I enjoy spending time on
            personal development and learning new skills. I am a big fan of
            outdoor activities, and am always up for a good book recommendation.
          </p>
          <SmallContainer>
            <PinIcon />
            <p>Stockholm based</p>
          </SmallContainer>
          <SmallContainer>
            <BookIcon />
            <p>Curious about most things</p>
          </SmallContainer>
          <SmallContainer>
            <PetIcon />
            <p>Cat owner</p>
          </SmallContainer>
        </SmallContainer>
      </GridContainer>
    </Container>
  );
};

export default About;

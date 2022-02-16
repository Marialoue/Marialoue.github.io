import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundIcon from "../assets/icons/NotFound";
import ArrowLeft from "../assets/icons/Arrow";
import HomeIcon from "../assets/icons/Home";
import CodeIcon from "../assets/icons/Code";

import {
  Container,
  MediumContainer,
  SmallContainer,
} from "../components/Container";
import Button from "../components/Button";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <MediumContainer>
        <NotFoundIcon />
        <p> Oh no, this page doesn't contain anything.</p>
          <Button as="a" onClick={() => {navigate('/')}}>
            <HomeIcon />
          </Button>
          <Button as="a" onClick={() => {navigate('/projects')}}>
            <CodeIcon />
          </Button>
          <Button as="a" onClick={() => {navigate(-1)}}>
            <ArrowLeft />
          </Button>
      </MediumContainer>
    </Container>
  );
};

export default NotFound;

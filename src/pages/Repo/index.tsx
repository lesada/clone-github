import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/lesada"}>
          lesada
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={"/lesada/twitter-clone"} />
      </Breadcrumb>

      <p>Twitter clone</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/lesada/twitter-clone">
        <GithubIcon />
        <span>View on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;

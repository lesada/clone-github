import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from './../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
          username="@lesada"
          name="Leslie"
          avatarUrl="https://avatars.githubusercontent.com/u/68572174?v=4"
          bio={"Front-end Developer Jr."}
          followers={33}
          following={17}
          company={undefined}
          location={"Brasil"}
          blog={"https://www.linkedin.com/in/lauren-leslie-ferreira/"}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

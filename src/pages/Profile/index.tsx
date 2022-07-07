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
          followers={33}
          following={17}
          company={undefined}
          location={"Brasil"}
          email={undefined}
          blog={undefined}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

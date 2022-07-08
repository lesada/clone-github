import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";
import ProfileData from "./../../components/ProfileData";
import RepoCard from "./../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

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
        <RightSide>
          <Repos>
            <h2>Pinned repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"lesada"}
                  reponame={"twitter-clone"}
                  description={undefined}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={1}
                  forks={undefined}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;

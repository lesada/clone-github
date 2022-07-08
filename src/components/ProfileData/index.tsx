import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  BlogIcon,
} from "./styles";

interface ProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  bio?: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  blog?: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  bio,
  followers,
  following,
  company,
  location,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
          {bio && <span>{bio}</span>}
        </div>
      </Flex>

      <Row>
        <li>
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;

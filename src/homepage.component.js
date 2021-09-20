import React from "react";
import {
  HomePageContainer,
  DirectoryMenu,
  MenuItem,
  Content,
  Title,
  SubTitle,
} from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu>
        <MenuItem>
          <Content>
            <Title>HATS</Title>
            <SubTitle>SHOP NOW</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>JACKETS</Title>
            <SubTitle>SHOP NOW</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>SNEAKERS</Title>
            <SubTitle>SHOP NOW</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>WOMENS</Title>
            <SubTitle>SHOP NOW</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>MENS</Title>
            <SubTitle>SHOP NOW</SubTitle>
          </Content>
        </MenuItem>
      </DirectoryMenu>
    </HomePageContainer>
  );
};

export default HomePage;

import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Renata Fagundes" nick="@refaglopes" />,
              <FollowSuggestion name="Junia Bevilaqua" nick="@jub" />,
              <FollowSuggestion name="Molly Vailer" nick="@mollyvailer" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

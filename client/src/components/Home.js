import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Roadmap from './Roadmap';
import Team from './Team';
import Rarity from './Rarity';
import Overview from './Overview';
import Mint from './Mint';
import Join from './Join';
import Footer from './Footer';
import Container from '@mui/material/Container';

const Home = function () {
  return (
    <div>
      <Header />
      <Container maxWidth="xl" style={{ padding: "0 3rem 0 3rem" }}>
        <Hero />
        <About />
        <Roadmap />
        <Team />
        <Rarity />
        <Overview />
        <Mint />
        <Join />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
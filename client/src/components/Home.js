import React from 'react';
import Container from '@mui/material/Container';
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
import Divider from './Divider'

// gradient background: "linear-gradient(20deg, #ffffff, rgba(92,225,230,0.25), #ffffff, rgba(92,225,230,0.25), #ffffff)" 

const Home = function () {
  return (
    <div style={{backgroundColor: "#180400", color: "#F5DABB"}}>
      <Header />
      <Divider/>
      <Container maxWidth="xl" style={{ padding: "0 3rem 0 3rem" }}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Roadmap />
        <Divider />
        <Overview />
        <Divider />
        <Rarity />
        <Divider />
        <Mint />
        <Divider />
        <Team />
        <Divider />
        <Join />
      </Container>
      <Divider/>
      <Footer />
    </div>
  );
};

export default Home;
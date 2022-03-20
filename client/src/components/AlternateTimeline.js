import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function AlternateTimeline() {

  return (

    <Timeline position="alternate" sx={{padding: "0"}}>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>1</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            Each of the 60+ film strips in Solfilm ISO 001 will be available for viewing.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>2</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Mint "Solfilm ISO 001"
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            Our first collection of negatives will be available 
            for mint on April 18th 2022.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>3</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            DAO Wallet
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            To progress as a community, governance will be 
            established via Discord to manage DAO assets.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>4</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            C-41 Chemical Packs
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            The catalyst to reveal your photos in full 
            colour has arrived! Develop your negatives to positives with C-41.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>5</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Giveaway
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            Who doesn’t love rewards? Exclusive C-41 packs 
            will be distributed to Solfilm holders at random!
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>6</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Community Film Collection
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            Photos from selected photographers will be released. Followed by 
            Discord voting to determine the top 3 photographers who will receive their own collections. 
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>7</p>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Physical Merchandise
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            Exercise your rights by purchasing print photos, physical albums, 
            and posters of your NFTs. 
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>8</p>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Roadmap 2.0 
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>
            As our community evolves, so will our ambitions 
            and actions. We will construct a new roadmap with member feedback.
          </Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>

  );
}
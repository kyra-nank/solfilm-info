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

    <Timeline position="alternate">

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
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
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
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
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
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
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
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
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
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
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
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{height: "1rem", width: "1rem", justifyContent: "center", backgroundColor: "#FFF"}}>
            <p style={{alignSelf: "center", color: "#180400"}}>7</p>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span" sx={{color: "#FFF", fontSize: "1.2rem"}}>
            Reveal Strips
          </Typography>
          <Typography sx={{fontSize: "0.9rem"}}>Strips will be posted on the website.</Typography>
        </TimelineContent>
      </TimelineItem>


    </Timeline>

  );
}
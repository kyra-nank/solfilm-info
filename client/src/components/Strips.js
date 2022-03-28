import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from './Header';
import Divider from './Divider';
import Footer from './Footer';

// import data
import Data from '../Data';

const Strips = function () {

  // data
  const originalData = Data;
  const [data, setData] = useState(originalData);

  // message
  const [count, setCount] = useState(345);
  const [percentage, setPercentage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // selectors
  const [type, setType] = useState('All');
  const [length, setLength] = useState('All');
  const [iso, setIso] = useState('All');

  const setMessageText = (filterCat, filterVal, filterData) => {
    setFilterCategory(filterCat);
    setFilterValue(filterVal);
    setCount(filterData.length);
    setPercentage(count / 345);
  };

  // type selector
  const handleTypeChange = (event) => {

    // change state
    const typeValue = event.target.value;
    setType(typeValue);

    if (typeValue === 'All' || null) {
      setData(Data);
      setPercentage(null);
    } else {
      // filter & set data
      const filteredData = originalData.filter(strip => {
        return strip.type === typeValue.toLowerCase();
      });
      setData(filteredData);

      // reset length, iso back to 'All'
      setLength('All');
      setIso('All');

      // set filterCategory, filterValue, count, percentage
      setMessageText('type', typeValue.toLowerCase(), filteredData);

    }

  };

  const handleLengthChange = (event) => {
    // change state
    const lengthValue = event.target.value;
    setLength(lengthValue);

    if (lengthValue === 'All' || null) {
      setData(Data);
      setPercentage(null);
    } else {
      // filter & set data
      const filteredData = originalData.filter(strip => {
        return strip.length === lengthValue;
      });
      setData(filteredData);

      // reset type, iso back to 'All'
      setType('All');
      setIso('All');

      // set filterCategory, filterValue, count, percentage
      setMessageText('length', lengthValue.toLowerCase(), filteredData);
    }

  };

  const handleIsoChange = (event) => {
    // change state
    const isoValue = event.target.value;
    setIso(isoValue);

    if (isoValue === 'All' || null) {
      setData(Data);
      setPercentage(null);
    } else {
      // filter & set data
      const filteredData = originalData.filter(strip => {
        return strip.iso === isoValue.toLowerCase();
      });
      setData(filteredData);

      // reset type, length back to 'All'
      setType('All');
      setLength('All');

      // set filterCategory, filterValue, count, percentage
      setMessageText('ISO', isoValue.toLowerCase(), filteredData);
    }
  };

  // render selectors
  const renderSelectors = () => {
    return (
      <Grid container alignItems="center" justifyContent="center" spacing={3} sx={{ p: "30px" }}>

        <Grid item xs={12} md={4} >
          <FormControl>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              sx={{ width: "200px" }}
              labelId="type-label"
              id="type-select"
              value={type}
              label="Type"
              onChange={handleTypeChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Colour">Colour</MenuItem>
              <MenuItem value="Black & White">Black & White</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl>
            <InputLabel id="length-label">Strip Length</InputLabel>
            <Select
              sx={{ width: "200px" }}
              labelId="length-label"
              id="length-select"
              value={length}
              label="Strip Length"
              onChange={handleLengthChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl>
            <InputLabel id="iso-label">ISO</InputLabel>
            <Select
              sx={{ width: "200px" }}
              labelId="iso-label"
              id="iso-select"
              value={iso}
              label="ISO"
              onChange={handleIsoChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
              <MenuItem value="400">400</MenuItem>
              <MenuItem value="1000">1000</MenuItem>
              <MenuItem value="Unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
    );
  };


  // for div when done
  // style={{ backgroundColor: "#180400", color: "#F5DABB" }}
  return (
    <div style={{ backgroundColor: "#180400", color: "#F5DABB" }}>
      <Header />
      <Divider />
      <Container maxWidth="xl" style={{ padding: "0 3rem 0 3rem" }}>
        <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          {/* message */}
          <Box>
            <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>SOLFILM ISO 001</Typography>
            {percentage !== null
              ? <Typography variant="subtitle1">{percentage}% of strips are of {filterCategory} {filterValue}</Typography>
              : null
            }
          </Box>

          {/* render selectors */}
          {renderSelectors()}

          {/* render strips */}
          <Grid container spacing={1}>
            {data.map((strip) => {
              return (
                <Grid item key={strip.id}>
                  <img alt={strip.id} style={{ maxHeight: "8rem", maxWidth: "100%", height: "auto", width: "auto" }} src={strip.img} />
                </Grid>
              );
            })}
          </Grid>
        </Box>


      </Container>
      <Divider />
      <Footer />

    </div>
  );
};

export default Strips;
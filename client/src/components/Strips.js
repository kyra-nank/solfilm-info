import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@mui/material/NativeSelect';

import { styled } from '@mui/material/styles';

import Header from './Header';
import Divider from './Divider';
import Footer from './Footer';

// import data
import Data from '../Data';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiFormLabel-root-MuiInputLabel-root': {
    color: '#F5DABB'
  },
  '& .MuiNativeSelect-iconStandard': {
    color: '#F5DABB',
    '&:hover': {
      color: '#FFF',
    }
  },
  'label + &': {
    marginTop: theme.spacing(3),
    color: '#F5DABB'
  },
  '& label': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #F5DABB',
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#FFF',
    },
    '&:hover': {
      borderColor: '#FFF',
    }
  },
}));


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
      <Grid container alignItems="center" justifyContent="center" >

        <Grid item xs={12} md={4} sx={{ paddingBottom: "2.5rem" }} >
          <FormControl sx={{ m: "1 1 1 0" }} variant="standard">
            <InputLabel sx={{
              "&:hover": { color: "#FFF" },
              "&.Mui-focused": { color: "#FFF" },
              color: '#FFF'
            }} htmlFor="type-select">Type</InputLabel>
            <NativeSelect
              sx={{ width: "200px" }}
              id="type-select"
              value={type}
              onChange={handleTypeChange}
              input={<BootstrapInput />}
            >
              <option value="All">All</option>
              <option value="Colour">Colour</option>
              <option value="Black & White">Black & White</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4} sx={{ paddingBottom: "2.5rem" }}>
          <FormControl sx={{ m: "1 1 1 0" }} variant="standard">
            <InputLabel sx={{
              "&:hover": { color: "#FFF" },
              "&.Mui-focused": { color: "#FFF" },
              color: '#FFF'
            }} htmlFor="length-select">Strip Length</InputLabel>
            <NativeSelect
              sx={{ width: "200px" }}
              id="length-select"
              value={length}
              onChange={handleLengthChange}
              input={<BootstrapInput />}
            >
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4} sx={{ paddingBottom: "2.5rem" }}>
          <FormControl sx={{ m: "1 1 1 0" }} variant="standard">
            <InputLabel sx={{
              "&:hover": { color: "#FFF" },
              "&.Mui-focused": { color: "#FFF" },
              color: '#FFF'
            }} htmlFor="iso-select">ISO</InputLabel>
            <NativeSelect
              sx={{ width: "200px" }}
              id="iso-select"
              value={iso}
              onChange={handleIsoChange}
              input={<BootstrapInput />}
            >
              <option value="All">All</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="1000">1000</option>
              <option value="Unknown">Unknown</option>
            </NativeSelect>
          </FormControl>
        </Grid>

      </Grid>
    );
  };



  return (
    <div style={{ backgroundColor: "#180400", color: "#F5DABB" }}>
      <Header />
      <Divider />
      <Container
        maxWidth="xl"
        style={{ padding: "0 3rem 0 3rem" }
        }>
        <Box style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
          {/* message */}
          <Box style={{ marginBottom: "3rem" }}>
            <Typography variant="h5" style={{ marginBottom: "1rem", color: "#FFF" }}>SOLFILM STRIPS</Typography>
            {/* {percentage !== null
              ? <Typography variant="subtitle1">{percentage}% of strips are of {filterCategory} {filterValue}</Typography>
              : null
            } */}
            <Typography variant="subtitle1">The following strips belong to the Solfilm ISO 001 collection.</Typography>
          </Box>

          {/* render selectors */}
          {renderSelectors()}
          <Typography sx={{ fontSize: "0.75rem", opacity: "0.6", my: "0.5rem", alignSelf: "center" }}>* Resolution lowered for faster loading</Typography>

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
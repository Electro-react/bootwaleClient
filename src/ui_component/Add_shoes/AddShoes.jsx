// all import
import { React, useState, useEffect } from "react";
import FileInputComponent from "react-file-input-previews-base64";
import { Checkbox } from "@mui/material";
import {
  TextField,
  Box,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";

const AddShoes = () => {
  // adding shoes size with checkbox
  var [sizes, setsizes] = useState({
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });
  // creating two   usestate varible for data entry
  const [Shoes, setShoes] = useState({
    ShoesImage: [],
    ProductName: String,
    Price: Number,
    Quantity: Number,
    Description: String,
    ShoesSize: [],
    Gender: String,
  });
  const [addAllData, collectAllData] = useState({});

  // Function for form submitting with useeffect and fetch()
  useEffect(() => {
    // destructuring data for uploading using fetch api
    var {
      ShoesImage,
      ProductName,
      Price,
      Quantity,
      Description,
      ShoesSize,
      Gender,
    } = addAllData;
    const pushData = async () => {
      try {
        var res = await fetch("/addShoes", {
          method: "POST",
          body: JSON.stringify({
            ShoesImage,
            ProductName,
            Price,
            Quantity,
            Description,
            ShoesSize,
            Gender,
          }),
          headers: { "Content-Type": "application/json; charset=utf-8" },
        });
        console.log(res);
      } catch (err) {
        console.log(err);
        // alert("err");
      }
    };
    pushData();
  }, [addAllData]);

  // function to add shoes sizes
  const changeValue = (e) => {
    if (e.target.checked) {
      setsizes({ ...sizes, [e.target.name]: true });
    } else {
      setsizes({ ...sizes, [e.target.name]: false });
    }
    setShoes({ ...Shoes, ShoesSize: sizes });
  };
  // function to submit form
  let handleSubmit = async (e) => {
    e.preventDefault();
    collectAllData(Shoes);
    setShoes({
      ShoesImage: [],
      ProductName: String,
      Price: Number,
      Quantity: Number,
      Description: String,
      ShoesSize: [],
      Gender: String,
    });
  };
  Shoes.ShoesImage.find((shoes) => shoes.base64);
  // function for setting gender;
  const selectGender = (gender) => {
    const selectedGender = gender.target.value;
    setShoes({ ...Shoes, [gender.target.name]: selectedGender });
  };
  // fuction for collecting image from uploading
  const addDetails = (e) => {
    const mydata = e.target.value;
    setShoes({ ...Shoes, [e.target.name]: mydata });
  };
  // const base = Shoes.ShoesImage.find((shoes) => shoes.base64);
  // console.log(base["File"]);
  // };
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "6rem",
      }}
    >
      {" "}
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { mt: 2, width: "60vw" },
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
        method='post'
      >
        <FileInputComponent
          labelText='Select shoes Image'
          labelStyle={{
            marginRight: "2rem",
            fontSize: "2rem",
          }}
          multiple={true}
          callbackFunction={(file_arr) => {
            const fileArr= [file_arr]
            console.log("accept multifile:", fileArr);
            setShoes({ ...Shoes, ShoesImage: fileArr });
          }}
          buttonComponent={
            <button type='button' style={{ fontSize: "2rem" }}>
              Attach
            </button>
          }
          accept='image/*'
        />
        <br />
        <TextField
          required
          id='standard-basic'
          label='Product name'
          name='ProductName'
          onChange={addDetails}
        />
        <br />
        <Box
          sx={{
            "& .MuiTextField-root": { mt: 2, mr: 5, width: "25ch" },
          }}
        >
          <TextField
            required
            type='number'
            label='Price'
            name='Price'
            onChange={addDetails}
          />
          <TextField
            required
            type='number'
            label='Quantity'
            name='Quantity'
            onChange={addDetails}
          />
        </Box>
        <br />
        <TextField
          required
          multiline
          label='Description'
          name='Description'
          onChange={addDetails}
        />
        <br />
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='Gender'
            value={Shoes.Gender}
            onChange={selectGender}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='child' control={<Radio />} label='Child' />
            <FormControlLabel value='kid' control={<Radio />} label='Kid' />
          </RadioGroup>
        </FormControl>
        <div>
          <FormControlLabel
            label='Select Shoes Sizes'
            control={
              <Checkbox
                checked={
                  sizes[4] &&
                  sizes[5] &&
                  sizes[6] &&
                  sizes[7] &&
                  sizes[8] &&
                  sizes[9] &&
                  sizes[10] &&
                  sizes[11]
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setsizes({
                      4: true,
                      5: true,
                      6: true,
                      7: true,
                      8: true,
                      9: true,
                      10: true,
                      11: true,
                    });
                  } else {
                    setsizes({
                      4: false,
                      5: false,
                      6: false,
                      7: false,
                      8: false,
                      9: false,
                      10: false,
                      11: false,
                    });
                  }
                }}
              />
            }
          />
          <FormControlLabel
            checked={sizes[4]}
            label='4'
            control={<Checkbox onChange={changeValue} name='4' />}
          />
          <FormControlLabel
            checked={sizes[5]}
            label='5'
            control={<Checkbox onChange={changeValue} name='5' />}
          />
          <FormControlLabel
            checked={sizes[6]}
            label='6'
            control={<Checkbox onChange={changeValue} name='6' />}
          />
          <FormControlLabel
            checked={sizes[7]}
            label='7'
            control={<Checkbox onChange={changeValue} name='7' />}
          />
          <FormControlLabel
            checked={sizes[8]}
            label='8'
            control={<Checkbox onChange={changeValue} name='8' />}
          />
          <FormControlLabel
            checked={sizes[9]}
            label='9'
            control={<Checkbox onChange={changeValue} name='9' />}
          />
          <FormControlLabel
            checked={sizes[10]}
            label='10'
            control={<Checkbox onChange={changeValue} name='10' />}
          />
          <FormControlLabel
            checked={sizes[11]}
            label='11'
            control={<Checkbox onChange={changeValue} name='11' />}
          />
        </div>
        <Button
          sx={{ fontWeight: "bold", mt: "4rem" }}
          color='inherit'
          size='large'
          variant='outlined'
          type='submit'
        >
          Submit Data
        </Button>
      </Box>
    </div>
  );
};

export default AddShoes;

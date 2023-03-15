import logo from "./Logo.png";
import './App.css';
import { FormControl,Input,InputLabel,FormHelperText,Checkbox,Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Design1 from "./Books/Design1.jpg";
import Design2 from "./Books/Design2.jpg";
import Design3 from "./Books/Design3.jpg";
import { useState } from "react";

import {db} from "./Firebase.js"

function App() {

  const [data, setData] = useState({});
  const [checkbox, setCheckbox] = useState({});

  const handleChangeCheckbox = (e) => {
    setCheckbox((prev)=> ({...prev, [e.target.id]:e.target.checked}))
  }

  const handleChange = (e)=> {
    setData((prev)=> ({...prev, [e.target.id]:e.target.value}))
  }

const MainData = {
  userData:data, 
  designData:checkbox
}
const handleSubmit = ()=> {
  db.collection("orders").add(MainData);

  alert("Request Submitted :)")
}

  return (
    <div className="App">
     
      <header className="App-header">
     
      <div className="MainForm">
      <img className="HeaderImg" src={logo}></img>
      <FormControl>
  <InputLabel htmlFor="my-input" required>Full Name</InputLabel>
  <Input onChange={handleChange} id="Name" aria-describedby="my-helper-text" />
</FormControl>
      <FormControl>
  <InputLabel htmlFor="my-input" required>Email address</InputLabel>
  <Input onChange={handleChange} id="Email" aria-describedby="my-helper-text" />
</FormControl>
   <FormControl>
  <InputLabel htmlFor="my-input" required>Contact Number</InputLabel>
  <Input onChange={handleChange} id="ContactNum" aria-describedby="my-helper-text" />

</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-input" required>Full Address</InputLabel>
  <Input onChange={handleChange} id="Address" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input" >City</InputLabel>
  <Input onChange={handleChange} id="City" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input" >State</InputLabel>
  <Input onChange={handleChange} id="State" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your Personal Details.</FormHelperText>
</FormControl>
<p>Choose your love</p>
<div  className="DesignSelectContainer">

<div>
<img className="Designs" src={Design1}></img>
<Checkbox   sx={{
    color: "#675e81",
    '&.Mui-checked': {
      color:"#675e81",
    },
  }} onChange={handleChangeCheckbox} id="Design1"/>
</div>
<div>
<img className="Designs" src={Design2} ></img>
<Checkbox   
sx={{
    color: "#af7554",
    '&.Mui-checked': {
      color:"#af7554",
    },
  }} onChange={handleChangeCheckbox} id="Design2"/>
</div>
<div>
<img className="Designs" src={Design3}></img>
<Checkbox   
 sx={{
    color: "#165153",
    '&.Mui-checked': {
      color:"#165153",
    },
  }} onChange={handleChangeCheckbox}  id="Design3"/>
</div>
</div>

      </div>
      </header>
      <div className="button">
      <Button  sx={{
    color: "#9f6599",
    '&.Mui-checked': {
      color:"#9f6599",
    },
  }} onClick={handleSubmit}>Pre Order</Button>
  
      </div>
      <div className="footer">
<div>
<p>Follow us :)</p>
<InstagramIcon style={{color:"#9f6599"}}/>
</div>

     
   </div>
    </div>
  );
}

export default App;

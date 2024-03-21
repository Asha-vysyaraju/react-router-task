import logo from './logo.svg';
 import  React from 'react';
import './App.css';
import {Routes,Route, useNavigate} from "react-router-dom"
import { FullStackDevelopment } from './components/FullStackDevelopment';
import { All } from './components/All';
import { DataScience } from './components/DataScience';
import { CyberSecurity } from './components/CyberSecurity';
import { Career } from './components/Career';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
  const navigate=useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
 
    <div className="App">
         <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <Tabs value={value} onChange={handleChange} textColor="secondary"
        indicatorColor="secondary" centered>
      <Tab label="ALL" onClick={()=>navigate("/")}/>
      <Tab label="FULL STACK DEVELOPMENT"  onClick={()=>navigate("/FullStackDevelopment")} />
      <Tab label="DATA SCIENCE"  onClick={()=>navigate("/DataScience")}/>
      <Tab label="CYBER SECURITY"  onClick={()=>navigate("/CyberSecurity")}/>
      <Tab label="CAREER"  onClick={()=>navigate("/Career")}/>
    </Tabs>
  </Box>
      <Routes>
      <Route path="/" element={<All />} />
      <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
      <Route path="/DataScience" element={<DataScience />} />
      <Route path="/CyberSecurity" element={<CyberSecurity />} />
      <Route path="/Career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;

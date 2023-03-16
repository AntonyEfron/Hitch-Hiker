import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../Home/homeButton.css';



function HomeButton(){
  const [navigate,setNavigate] = useState(false)
  const [showDiv, setShowDiv] = useState(false);
  const [user,setUser]=useState(null)
  const transition = { 
    width:'100%',
    height:'4rem',
    display:'flex',
    justifyContent:'center',
    padding:'10px',
    animation:"inAnimation 250ms ease-in",
    animationFillMode: "forwards",}
    const transitionOut ={
      width:'100%',
    height:'4rem',
    display:'flex',
    justifyContent:'center',
    padding:'10px',
    animation:"inAnimation 250ms ease-",
    animationFillMode: "forwards",
    }
  useEffect(()=>{
    const dataStr = localStorage.getItem('authInfo')
    // console.log(dataStr);
    if (dataStr) {
      setUser(JSON.parse(dataStr))
      // console.log(user);
    }
  },[])
    const navigation= ()=>{
        // setNavigate(true); 
        setShowDiv(!showDiv)
    }


    
    return (    
       <div className='d-flex justify-content-center centerspace' >
        <div className='centerDiv'>
          <div style={{width:'12rem',height:'4rem'}} className="Lbutton m-auto d-flex justify-content-center">
            {
              user?<button type="button" class="btn btn-dark btn-lg"  style={{height:'4rem',width:'12rem'}} onClick={navigation}>Select Service</button>:
             <Link to={{pathname:'/login'}}><button type="button" class="btn btn-dark btn-lg"  style={{height:'4rem',width:'12rem'}} >Get Started</button></Link> 
            }
            
          </div>
          {
            showDiv && 
            <div className="radio" style={showDiv? transition:transitionOut}>
            <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="passenger"
              name="radio-buttons-group"
            >
              <FormControlLabel value="passenger" control={<Radio />} label="I'm a Passenger" />
              <FormControlLabel value="transporter" control={<Radio />} label="I'm a Transporter" />
              <button type="button" class="btn btn-dark">OK</button>
            </RadioGroup>
           </FormControl>
            </div>
            
          }
          <div style={{width:'100%',height:'4rem',margin:"auto",textAlign:'center',fontSize:'25px'}} className="d-flex LbuttonText m-2">
            <p><b>Get your traveling partner & Enjoy your Journey!!</b></p>
          </div>
        </div>
       </div>
     );
}

export default HomeButton;
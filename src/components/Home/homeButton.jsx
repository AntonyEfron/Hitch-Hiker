import React,{useEffect,useState,useContext, useMemo} from 'react';
import { userServiceContext } from '../../static/userServiceContext';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../Home/homeButton.css';


function HomeButton(){
  const { serviceSelected,setServiceSelected } = useContext(userServiceContext)

  // const serviceValue = useMemo(()=>({serviceSelected,setServiceSelected}),[serviceSelected,setServiceSelected])
  const [service,setService]= useState(false)
  const [settService,setSelectedservice]=useState(null)
  const [showDiv, setShowDiv] = useState(false);
  const [user,setUser]=useState(null)
  
  useEffect(()=>{
    const dataStr = localStorage.getItem('authInfo')
    // console.log(dataStr);
    if (dataStr) {
      setUser(JSON.parse(dataStr))
      // console.log(user);
    }
  },[])
    const navigation= ()=>{ 
        setShowDiv(!showDiv)
    }
const selectService =()=>{
  setService(!service)
  if (service === false) {
    setSelectedservice('passenger')
    setServiceSelected("Passenger")
    // localStorage.setItem('service',{service:serviceSelected})
    console.log(serviceSelected);
  }else{
    setSelectedservice('transporter')
    setServiceSelected("Transporter")
    // localStorage.setItem('service',{service:serviceSelected})
    console.log(serviceSelected);
  }
}
const setServiceButton =()=>{
    // if (serviceSelected) {
    //   return(
    //     <Navigate to={{
    //       pathname:'/action'
    //     }}/> 
    //   )
    // }
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
            <div className="radio" style={{justifyContent:'center',display:'flex',padding:'2px'}}>
            <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="passenger"
              name="radio-buttons-group"
            >
              {/* <input type="radio" name="choose" id="" value='Passenger' /> */}
              <FormControlLabel  control={<Radio   value="Passenger" checked={ settService === 'passenger' } onChange={selectService}/>} label="I'm a Passenger" />
              <FormControlLabel  control={<Radio  value="Transporter" checked={ settService === 'transporter'} onChange={selectService}/>} label="I'm a Transporter" />
              <button type="button" class="btn btn-dark" onClick={setServiceButton}>OK</button>
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
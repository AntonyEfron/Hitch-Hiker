import React from 'react';
import { Link } from 'react-router-dom';
import '../MakeAction/MakeAction.css'
import img from '../../img/passenger.svg'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import ServiceCard from '../serviceDetail/serviceCard';

function MakeAction() {
    return ( 
         <div className="actionPage">
            <div className="d-flex justify-content-center DivisionFlex">
            <div className='actionDiv '>
            <div className='topBlock m-2'>
                <h4 className='titleName'><b>#You_are_a_Passenger</b></h4>
                <div className='icon'> <img src={img} alt="" className='iconss' /></div>
            </div>
            <div className='bottomBlock mx-auto'>
                <div className='action '>
                <div className='left my-1'>
                    <div className="leftButton d-flex justify-content-center">
                        <div className="buttons ">
                        <button type="button" class="btn  btn-dark mx-1 " style={{fontFamily:"'IM Fell English', serif",fontFamily:"'Inika', serif",fontFamily:"'Rubik', sans-serif",border:'2px solid black'}}>Create Request</button>
                         <button type="button" class="btn  btn-outline-success mx-1 " style={{fontFamily:"'IM Fell English', serif",fontFamily:"'Inika', serif",fontFamily:"'Rubik', sans-serif",border:'2px solid green'}}>Grab a Traveller</button>
                        </div>
                    </div>
                </div>
                <div className='right my-1'>
                    <div className="map">
                        <div className="leftButton d-flex justify-content-center">
                        <div className="buttonsLive">
                            <div className="live">
                                <button type="button" class="btn  btn-outline-danger btn-lg mx-1" style={{fontFamily:"'IM Fell English', serif",fontFamily:"'Inika', serif",fontFamily:"'Rubik', sans-serif",border:'3px solid red'}}>Go Live</button>    
                            </div>
                          </div>
                        </div>
                    </div>
                
                </div>
            </div>
            </div>
            </div>
            </div>
         </div>
            
        
        
     );
}

export default MakeAction;
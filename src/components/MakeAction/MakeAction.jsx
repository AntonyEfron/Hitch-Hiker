import {useState,useEffect,useContext} from 'react';
import {  Link,Navigate } from 'react-router-dom';
import '../MakeAction/MakeAction.css'
import img from '../../img/passenger.svg'
import imgtransporter from '../../img/transporter.png'

function MakeAction() {
    
    const [userData,FetchUserData] = useState(null)
    const [sservice,setService]= useState(false)


    useEffect(()=>{
        const user =  localStorage.getItem('authInfo')
        // console.log(userContext);
        if (user) {
            // console.log(userContext);
            FetchUserData(JSON.parse(user))
            const serv = JSON.parse(user)
            console.log(serv.addService);
            if (serv.addService === "Transporter") {
                setService(true)
            }
        }
    },[])

    return ( 
         <div className="actionPage">
            <div className="d-flex justify-content-center DivisionFlex">
            <div className='actionDiv '>
            <div className='topBlock m-2'>
                {
                userData && <h4 className='titleName'><b>#You_are_a_{userData.addService}</b></h4>
                }
                {
                sservice === true ? <div className='icon'> <img src={imgtransporter} alt="" className='iconss'/></div>:
                    <div className='icon'> <img src={img} alt="" className='iconss'/></div>
                }               
            </div>
            <div className='bottomBlock mx-auto'>
                <div className='action '>
                <div className='left my-1'>
                    <div className="leftButton d-flex justify-content-center">
                        <div className="buttons ">
                            {
                              sservice === true ?  <button type="button" class="btn  btn-dark mx-1 " style={{border:'2px solid black'}}>Create Ride</button>:<button type="button" class="btn  btn-dark mx-1 " style={{border:'2px solid black'}}>Fetch Ride</button>
                            }
                            {
                            sservice === true ? <button type="button" class="btn  btn-outline-success mx-1 " style={{border:'2px solid green'}}>Grab a Passenger</button>:<button type="button" class="btn  btn-outline-success mx-1 " style={{border:'2px solid green'}}>Grab a Traveller</button>
                            }
                        
                        </div>
                    </div>
                </div>
                <div className='right my-1'>
                    <div className="map">
                        <div className="leftButton d-flex justify-content-center">
                        <div className="buttonsLive">
                            <div className="live">
                                <button type="button" class="btn  btn-outline-danger btn-lg mx-1" style={{border:'3px solid red'}}>Go Live</button>    
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
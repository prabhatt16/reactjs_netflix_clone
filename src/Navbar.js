import React, { useEffect, useState } from 'react'
import './Navbar.css';
function Navbar() {

    const [show, handleshow] = useState(false);
    useEffect(() => {
    
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleshow(true);
            }else{
                handleshow(false);
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        };
    
    }, [])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img className='nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
            <img className='nav-profile' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="logo"/>
        </div>
    )
}

export default Navbar

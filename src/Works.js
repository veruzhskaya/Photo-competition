import { useLayoutEffect, useState } from 'react';
import gsap from "gsap";
import Buttons from './Buttons';
import { dataWorks } from './data';
import MyPhoto from './MyPhoto'

function Works() {
    const [myWorks, setMyWorks] = useState (dataWorks);
    const chosenPhoto = (searchTerm) => {
        const newPhoto = dataWorks.filter (
            element => element.searchTerm === searchTerm
        );
        setMyWorks (newPhoto);
    }


    useLayoutEffect(() => {
        gsap.to(".header", {opacity:1, duration:4, delay:1});
   
    },[])

    return(        
    <div>
        <div className="head">
            <h1 className="header">МОИ РАБОТЫ</h1>
        </div>
    <Buttons filteredPhoto = {chosenPhoto}/>
    <MyPhoto works={myWorks}/>
    
    </div>
      
    )
}
export default Works;
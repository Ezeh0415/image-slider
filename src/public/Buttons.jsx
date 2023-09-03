import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs"
import Samll from "./Small";
import { useState } from "react";
const Button = ({next,prev,Currentnext,peoples}) => {



    return ( 
        <div className="button-section">
              <div className="prev" onClick={prev}  ><button><BsFillArrowLeftSquareFill /></button></div>
               <Samll  Currentnext={Currentnext} peoples={peoples}/>
              <div className="next" onClick={next} ><button><BsFillArrowRightSquareFill /></button></div>
        </div>
     );
}
 
export default Button;
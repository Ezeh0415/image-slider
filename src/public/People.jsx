import {BsFillFileArrowDownFill} from "react-icons/bs"
import Button from "./Buttons";
import { useState } from "react";
import Samll from "./Small";
const People = () => {

    const [Currentnext , setCurrentnext] = useState(0)


    const next = () => {
        const nextpicture = Currentnext + 1;
        

        if(nextpicture < peoples.length ){
            setCurrentnext(nextpicture);
        }else {
            setCurrentnext(0);
        }
    }

    const prev = () => {
        const prevpicture = Currentnext - 1;

        if(prevpicture > peoples.length ){
            setCurrentnext(prevpicture);
        }else {
            setCurrentnext(0);
        }

    }
  
    const  peoples = [
        {
            name:"Cardi B",
            img_url:"assets/image/cardi b.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Cardi B"
        },
        {
            name:"Alan Walker",
            img_url:"assets/image/alan walker.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Alan Walker"
        },
        {
            name:"Omah lay",
            img_url:"assets/image/omah lay.webp",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Omah lay"
        },
        {
            name:"Drake",
            img_url:"assets/image/drake.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Drake"
        },
        {
            name:"Justin Bieber",
            img_url:"assets/image/justin-bieber-us-pop-singer-in-july-2012-photo-jeffrey-mayer-CTMGKC.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Justin Bieber"
        },
        {
            name:"Elon Musk",
            img_url:"assets/image/Elon_Musk_Colorado_2022_(cropped2).jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Elon Musk"
        },
        {
            name:"Selens Gomez",
            img_url:"assets/image/selena Gomez.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Selens Gomez"
        },
        {
            name:"Phyno",
            img_url:"assets/image/phyno.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Phyno"
        },
        {
            name:"Mark Zurgabeg",
            img_url:"assets/image/mark.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Mark Zurgabeg"
        },
        {
            name:"Burna Boy",
            img_url:"assets/image/burna-boy-attends-the-2023-costume-institute-benefit-celebrating-karl-lagerfeld-a-line-of.jpg",
            discription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe veniam! Dolorem aut, consectetur voluptatem culpa deserunt modi impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aspernatur hic asperiores commodi dolores sit quo quibusdam quam consequuntur!",
            img_alt:"Burna Boy"
        },
        
    ];

    return ( 
        <div className="people-section">
            
            <div className="quote">
                <div className="celeb-name">
                    <h1>{peoples[Currentnext].name}</h1>
                </div>
                  <blockquote>{peoples[Currentnext].discription}</blockquote>
                  <div className="download-section">
                   
                  <a 
                   href={peoples[Currentnext].img_url}
                   download={peoples[Currentnext].img_alt}
                   >
                    Download

                    <i className="icon"> <BsFillFileArrowDownFill /> </i>
                   </a>
                  </div>

                    {/* <div className="small-f">
                        <Samll  Currentnext={Currentnext}/>
                    </div> */}
                    <Button  next={next} prev={prev} peoples={peoples} nextpic={Currentnext} />
                   
            </div>
            <div className="imgs">
                <img src={peoples[Currentnext].img_url} alt={peoples[Currentnext].img_alt} />
            </div>

        </div>
     );
}
 
export default People;
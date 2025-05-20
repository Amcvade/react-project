//imports

import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import Slideview from "./Slideview"
import"./index.css"
import { useState } from "react"
import thumbnailimage1 from "./assets/thumbnail1.jpeg";
import thumbnailimage2 from "./assets/thumbnail2.jpeg";
import thumbnailimage3 from "./assets/thumbnail3.jpeg";
import Blankimage from "./assets/blank image.jpg"

//test slide pictures
let TEST_SLIDES=[
    {
       id:0,
       order:1,
       image: thumbnailimage1,
       text:"web design",
       fontcolor:"red"
    },
    {
        id:1,
        order:2,
        image: thumbnailimage2,
        text:"Cybersecurity",
        fontcolor:"black"
    },
    {
        id:2,
        order:3,
        image:thumbnailimage3,
        text:"Digital marketing",
        fontcolor: "green"
    }
];
//app functions

export default function App(){
  const [slides,setSlides]= useState(TEST_SLIDES)
  const[selectedSlideId,setSelectedSlideId] = useState(0)
  const selectedSlide = slides.find (slide => slide.id === selectedSlideId)
  const addBlankSlide =() =>{
  const blankSlide={
        id:slides.length ? slides[slides.length-1].id + 1:0 ,
        order:4,
        image: Blankimage,
        text:"",
        fontcolor:"blue"
    }
    //slides
    setSlides([...slides,blankSlide])
  }

  const deleteSlide =(idToDelete:number) => {
    setSlides (slides.filter( slides => slides.id !== idToDelete))
  }
  
  const updateSlideFontcolor=( 
    newcolor: string,
    idToUpdate?: number)=>{
    if (idToUpdate===undefined){
    return
  }

//
    setSlides(slides.map(slide =>(
        slide.id !==idToUpdate ? slide :{
        ...slide,
        fontcolor: newcolor
      }
    )))
  }
  // components 
  return(
    <div className="d-flex flex-column vh-100 ">
      App
      <Toolbar 
      selectedSlide={selectedSlide}
       addBlankSlide={addBlankSlide}
       updateSlideFontColor={updateSlideFontcolor}/>

      <div className="d-flex flex-row flex-grow-1">
      <Sidebar slides={slides} 
      deleteSlide={deleteSlide}
      selectedSlideId={selectedSlideId}
      setSelectedSlideId={setSelectedSlideId}/>

      <Slideview slide={selectedSlide}/>
    </div>
    </div>
  )
}
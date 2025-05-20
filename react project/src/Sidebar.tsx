//imports
import { useState } from "react";
import Slidethumbnail from "./Slidethumbnail";

//props
type sidebarprops={
    slides:Array<{id:number, order: number,image:string}>
    selectedSlideId:number
    setSelectedSlideId:(newValue:number)=> void
    deleteSlide:(id: number)=> void
}
//functions

export default function Sidebar
       ({
        slides,
        selectedSlideId,
        setSelectedSlideId,
         deleteSlide
        }:sidebarprops){
    const[isExpanded,setIsExpanded]=useState(true);
    
    const handleButtonClick=() => {
       setIsExpanded  (!isExpanded)
    }

    const handleSlideClick = (id: number)=>{ setSelectedSlideId(id)
    }

    return(
        //slides
        <>
    {isExpanded ? (
       <div className="d-flex flex-column p-6  bg-dark text-white">
           {slides.map(slide => (
        <Slidethumbnail
           key={slide.id} 
           slide={slide}
           onSelected={handleSlideClick} 
           isSelected ={slide.id===selectedSlideId}
           deleteSlide={deleteSlide}
           />
                ))}
            </div>
    ):null}

    <button className="btn btn-light p-1 border" 
    onClick={handleButtonClick}> 
    {isExpanded? "<":">"}</button>
    </>
  )
  }



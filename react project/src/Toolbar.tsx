//imports
import { Button, Modal, Stack } from "react-bootstrap";
import coloricon from "./assets/font color img.jpeg"
import fonticon from "./assets/font family img.jpeg"
import ToolbarButton from "./Toolbarbutton";
import { useState } from "react";
import plusicon from "./assets/plus icon.png"
//props

type Toolbarprops={
  addBlankSlide:()=> void
  updateSlideFontColor:(color:string,id?:number)=> void
  selectedSlide?:{
    id:number,
    order:number,
    image:string,
    fontcolor:string
  }
}
//function

export default function Toolbar({
  addBlankSlide,
  updateSlideFontColor,
   selectedSlide
  }:Toolbarprops)
  {
  const [isColorModalopen, setIsColorModalOpen]= useState(false)
  const handleClose= ()=> setIsColorModalOpen (false)
//buttons

  return(
    <>
    <div className="bg-light p-3 border-bottom">
      <ToolbarButton icon={plusicon} onClick={addBlankSlide}/>
      <ToolbarButton icon={coloricon} onClick={()=>setIsColorModalOpen(true)}/>
      <ToolbarButton icon={fonticon} onClick={()=>alert("set font family!")}/>
      
   </div>
        <Modal show={isColorModalopen} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Font color</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Stack direction="horizontal" gap={1}>
            <Button
            variant={selectedSlide?.fontcolor ==="red"?"danger":"outline"}
             onClick={()=>updateSlideFontColor("red",selectedSlide?.id)}>red</Button>
            <Button
             variant={selectedSlide?.fontcolor ==="green"?"success":"outline"}
              onClick={()=> updateSlideFontColor("green",selectedSlide?.id,)}>green</Button>
            <Button
             variant={selectedSlide?.fontcolor ==="black"?"dark":"outline"}
             onClick={()=> updateSlideFontColor("black",selectedSlide?.id,)}>black</Button>
          </Stack>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
          close
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

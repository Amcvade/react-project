//Toolbar function = a part of the app
import coloricon from "./assets/font color img.jpeg"
import fonticon from "./assets/font family img.jpeg"
import ToolbarButton from "./Toolbarbutton";

export default function Toolbar(){
  return(
    <div className="bg-light p-3 border-bottom">
      <ToolbarButton icon={coloricon} onClick={()=>alert("set font color!")}/>
      <ToolbarButton icon={fonticon} onClick={()=>alert("set font family!")}/>
      

   </div>
  )
}

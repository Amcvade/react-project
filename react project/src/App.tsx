import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import Slideview from "./Slideview"
import"./index.css"

export default function App(){
  return(
    <div className="d-flex flex-column vh-100 ">
      App
      <Toolbar/>
      <div className="d-flex flex-row flex-grow-1">
      <Sidebar/>
      <Slideview/>
    </div>
    </div>
  )
}
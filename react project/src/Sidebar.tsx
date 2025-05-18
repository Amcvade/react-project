//sidebar function = a part of the app
import thumbnailimage1 from "./assets/thumbnail1.jpeg";
import thumbnailimage2 from "./assets/thumbnail2.jpeg";
import thumbnailimage3 from "./assets/thumbnail3.jpeg";
import Slidethumbnail from "./Slidethumbnail";
let testSlides=[
    {
       id:0,
       order:1,
       image: thumbnailimage1
    },
    {
        id:1,
        order:2,
        image: thumbnailimage2
    },
    {
        id:2,
        order:3,
        image:thumbnailimage3
    }
];

export default function Sidebar(){
    return (
<div className=" d-flex flex-column p-6 flex-grow-1 bg-dark text-white" style={{width:"200px",height:"vh-100"}}>
           <Slidethumbnail slide = {testSlides[0]} />
           <Slidethumbnail slide = {testSlides[1]} />
           <Slidethumbnail slide = {testSlides[2]} />
</div>
    )
}


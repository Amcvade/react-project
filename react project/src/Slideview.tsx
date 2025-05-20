//slide view function = a part of the app 

type SlideviewProps ={
    slide?:{
        id:number,
        order: number,
        image:string,
        text: string,
        fontcolor:string
    }
}

    export default function Slideview ({slide}:SlideviewProps){
        let slideheight= 400;
     return ( 
         <div className="flex-grow-1 d-flex flex-column">
             <div className=" flex-grow-1 d-flex justify-content-center  align-items-center">
                 <div className="bg-pink  m-3  w-75 shadow-sm p-3 border"
                 style={{height: slideheight +"px",
                    color:slide?.fontcolor
                 }}
                 >
                    {slide?.text}
                 </div>
                 
                 <textarea className="form-control"  defaultValue="Items-list"></textarea>
             </div>
          </div>
         );
      }


   
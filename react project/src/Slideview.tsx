//slide view function = a part of the app 

    export default function Slideview (){
        let slideheight= 400;
     return ( 
         <div className="flex-grow-1 d-flex flex-column">
             <div className=" flex-grow-1 d-flex justify-content-center  align-items-center">
                 <div className="bg-pink  m-3  w-75 shadow-sm p-3 border"style={{height: slideheight +"px"}}
                 >
                    Slideview 
                 </div>
                 
                 <textarea className="form-control"  defaultValue="Items-list"></textarea>
             </div>
          </div>
         );
      }


   
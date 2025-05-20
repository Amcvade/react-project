//slidethumbnail function = a part of the app
type slidethumbnailprops = {
    slide: {id:number, order: number,image:string}
    isSelected: boolean
    onSelected: (id:number)=>void
    deleteSlide:(id: number)=> void
}

export default function Slidethumbnail 
({slide,isSelected, onSelected,deleteSlide}:slidethumbnailprops)
{
    return (
    <div>
    <div className="flex justify-content-between mt-2 mb-1 align-items-center">
       <span>{slide.order}</span>
       <button className="btn btn-sm  btn-outline-danger"
        onClick={() =>deleteSlide(slide.id)}>x</button>
    </div>
       <img src={slide.image}
        onClick={() => onSelected(slide.id)}
        className={`border border-2 rouded-4 ${isSelected?"border-primary" :"border-light"}`}
        />
        </div>
    )
}

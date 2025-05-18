//slidethumbnail function = a part of the app


export default function Slidethumbnail ({slide}:{slide: {order: number,image:string}})
{
    return (
    <>
       <span>{slide.order}</span>
       <img src={slide.image} onClick={() => alert("selected!")}/>
    </>
    )
}

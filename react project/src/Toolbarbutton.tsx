//Toolbar button  function = a working part of the app

export default function ToolbarButton({icon, onClick}:{icon:string, onClick:()=>void})
{
    return (
    <button className="btn btn-outline-secondary me-2"
            onClick= {onClick}>
            <img src={icon} style={{width:"1rem"}}/>
    button
    </button>
     )
}
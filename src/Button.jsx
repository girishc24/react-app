// import style from './Button.module.css'

function Button(){
    // INline Css
    const style ={
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer",
    } 
    return(
        <button style={style}>Click Now</button>
    );
}
export default Button
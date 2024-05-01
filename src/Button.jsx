 //How to Style React Component With Css
//-----------------------------------
//Not including external frameworks or preprocessor

// 1.External
// 2.Modules
// 3.Inline

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
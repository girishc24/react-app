import Header from "./Header.jsx"
import Food from "./Food.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"

function App() {
  return(
    <>
     
      <Student name="Spongbob" age={24} isStudent={true}/>
      <Student name="Patrick" age={22} isStudent={false}/>
      <Student name="Demo" age={22} isStudent={false}/>
      <Card/>
      
    </>
    
  );
}

export default App

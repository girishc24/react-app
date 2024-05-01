// Props = read-only properties that are shared between components.
// A  Parent component can send data to a child component.
//  <component key=value  />
import PropTypes from 'prop-types'

function Student(props){
    return  (
        
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "YES" : "NO"}</p>
        </div>
    );
}
// Type Validation 
Student.prototype = {
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool
}
// Default Props
Student.defaultProps = {
    name: "Guest",
    age: 10,
    isStudent: false
}
export default Student
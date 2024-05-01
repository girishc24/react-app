function UserGreeting(props){
        if (props.isLoggedIn) {
            return <h2 className="welcome-message">Welcome {props.username}</h2>;
        }
        return <h2  className="login-prompt">Please Login to Continue </h2>;
       
}
export default UserGreeting
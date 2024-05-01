import profilePic from './assets/63511244.png'


function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" className='profileimage' />
            <h2 className='card-title'>Tech With Girish</h2>
            <p className='card-content'>FANG Company </p>
        </div>
    );
}
export default Card
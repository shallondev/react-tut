import profilePic from './assets/me.jpg'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Shallon F</h2>
            <p className="card-text">I am trying to get a job and play video games.</p>
        </div>
    );
}

export default Card
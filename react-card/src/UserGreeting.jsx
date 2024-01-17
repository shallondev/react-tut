
function UserGreeting(props){
    
    return(props.isLoggedIn ? <h2>Welcome {props.LoggedIn}</h2> : 
                              <h2>Please Log in to continue</h2>)
}

export default UserGreeting
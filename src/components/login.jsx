import { GoogleLogin } from 'react-google-login';
import { Link } from "react-router-dom"; 

const clientId = "104770806637-eu7b9plmra6tugbet2d7a07dk4f02ht6.apps.googleusercontent.com"; 

function Login() {

    const handleSubmit = (eventChange) => {
        eventChange.preventDefault();
      };

    const onSuccess = (res) => {
        console.log("Yay! You're in!! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Whoopsie! Can't let you in - try again! res:", res);
    }

    return( 
        <div id = "signInButton">
            <GoogleLogin>
            clientId = {clientId}
            buttonText = "Login Here!"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
            onSubmit={() => handleSubmit()}
            {/* <Link to="/membersgallery">Log in</Link> */}
            </GoogleLogin>
        </div>
    )
}

export default Login;
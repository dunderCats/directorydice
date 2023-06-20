import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "104770806637-eu7b9plmra6tugbet2d7a07dk4f02ht6.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Yay! You're in!! Current user: ", res.profileObj);
    navigate("/membersgallery");
  };

  const onFailure = (res) => {
    console.log("Whoopsie! Can't let you in - try again! res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Log in here with Google!"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "104770806637-eu7b9plmra6tugbet2d7a07dk4f02ht6.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    console.log("Session over and out! You better come back soon!!");
    navigate("/login");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Log me out!"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;

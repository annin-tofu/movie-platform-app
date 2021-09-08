import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser); //REDUX 03015520

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626103066/hBEe3tdn_400x400_d7t7jg.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>
              {/* REDUX. This is to pull the user.email from REDUX STORE 03015520 */}
              {user.email}
            </h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <button
                onClick={() => auth.signOut()} //this triggers "Listener" as specified in App.js auth.onAuthStateChanged... 03015740
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

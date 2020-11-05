import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/Authentication/LoginForm/LoginForm";
import Menu from "./components/Menu/Menu";
import {
  getToken,
  PASSWORD,
  removeToken,
  saveToken,
  USERNAME,
} from "./constants";

function App() {
  const [auth, setIsAuth] = useState(false);

  const signOutClick = () => {
    removeToken()
    setIsAuth(false);
  }
  

  const onSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    var email = target.inputEmail.value;
    var password = target.inputPassword.value;

    if (email === USERNAME && password === PASSWORD) {
      saveToken();
      setIsAuth(true);
      
    } else {
      alert("There is some error try again!");
    }
  };

  useEffect(() => {
    if (getToken()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className="App">
      {auth && <Menu onClick={signOutClick}/>}
      {!auth && <LoginForm onSubmit={onSubmit} />}
    </div>
  );
}

export default App;

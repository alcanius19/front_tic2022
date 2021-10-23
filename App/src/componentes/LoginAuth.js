import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

function LoginAuth() {
  const [state, setState] = React.useState({
    isLoggedIn: false,
    userInfo: {
      name: "",
      emailId: "",
    },
  });

  const [usuarios, setUsuarios] = React.useState([]);

   const url = "http://localhost:4000/api/usuarios/email";

  const responseSuccessGoogle = (response) => {
    axios
      .post("http://localhost:4000/api/usuarios", { tokenId: response.tokenId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    setState({ isLoggedIn: true, userInfo });
    
   
    
  };
  
  const obtenerUsuarios = async () => {
    let api = url.concat(`/${state.userInfo.emailId}`);
    console.log(api);
    const res = await axios.get(api);
    const users = res.data;
    setUsuarios(users);
   
  };
  
  React.useEffect(() =>{
    setTimeout(() => {
      if (state.isLoggedIn) {
         obtenerUsuarios();
         localStorage.setItem('state',usuarios[0].estado)
         localStorage.setItem('rol',usuarios[0].rol);
       
      }else{
         localStorage.removeItem("state");
          localStorage.removeItem("rol");
      }
     
    })
  })


  const logout = (response) => {
    console.log(response);

    let userInfo = {
      name: "",
      emailId: "",
    };
    setState({ isLoggedIn: false, userInfo });
    localStorage.removeItem('state');
  };
  const responseErrorGoogle = (response) => {};

  // <h1>Hola , {state.userInfo.name}</h1>
  return (
    <div>
      {state.isLoggedIn ? (
        <div>
          <GoogleLogout
            clientId="633086225553-495c1chi0spf75vvs1h3j3n3hnfgkufa.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      ) : (
        <GoogleLogin
          clientId="633086225553-495c1chi0spf75vvs1h3j3n3hnfgkufa.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}

export default LoginAuth;

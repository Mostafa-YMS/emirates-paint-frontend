import logo from "./logo.svg";
import "./App.scss";
// import  "dis/bootstrap/less/bootstrap.less";
import React from "react";
import { OpenRoutes, PrivateRoutes } from "./routes/router";
import auth from "./services/auth";
import Spinner from "./components/Spinner";
import AppContext from "./contexts/AppContext";
import Loader from "./components/Loader";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);

  const appContext = React.useMemo(
    () => ({
      updateUserObj: async (data) => {
        // console.log("UserUpdated", data);
        await checkLoggedIn();
      },
    }),
    []
  );

  const checkLoggedIn = async () => {
    var authenticated = await auth.isAuthenticated();
    if (authenticated) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const init = async () => {
    await checkLoggedIn();
    // if (window.PublicKeyCredential) {
    //   alert("public-key credentials supported");
    // } else {
    //   alert("public-key credentials not supported");
    // }
    auth.checkLastUsed();
    setInterval(() => {
      auth.updateLastUsed();
    }, 5000);
    setIsReady(true);
  };
  React.useEffect(() => {
    init();
  }, []);

  if (isReady) {
    return (
      <AppContext.Provider value={appContext}>
        {!isLoggedIn && <OpenRoutes {...props} />}
        {isLoggedIn && (
          <React.Fragment>
            <PrivateRoutes {...props} />
          </React.Fragment>
        )}
      </AppContext.Provider>
    );
  } else {
    return <Loader />;
  }
}

export default App;

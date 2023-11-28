import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="544990497746-ub9gbhv49e1h9gkl1bfac00qk0bnml1e.apps.googleusercontent.com">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

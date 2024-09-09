// import { SignIn } from "@clerk/clerk-react";
import Home from "./Home";
import { useAuth } from "@clerk/clerk-react";
import { RedirectToSignIn } from "@clerk/clerk-react";
function Layout() {
  const { isSignedIn } = useAuth();

  return (
    <>
       <div>
       {isSignedIn ? (
        <Home />
      ) : (
        <RedirectToSignIn />
      )}
    </div>
    </>
  );
}

export default Layout;

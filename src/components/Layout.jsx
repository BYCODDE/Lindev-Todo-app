// import { SignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { RedirectToSignIn } from "@clerk/clerk-react";
import Header from "./Header";
function Layout() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <div>{isSignedIn ? <Header /> : <RedirectToSignIn />}</div>
    </>
  );
}

export default Layout;


import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase";
import SignUpForm from "../../signup/SignUpForm";

const SignIn = () => {

  useEffect(() => {
    const googleRedirect = async () => {
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    googleRedirect();
  }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }



  return (
    <div>
        SignIn
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        <SignUpForm />
    </div>
  )
}

export default SignIn
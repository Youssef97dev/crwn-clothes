import { useState } from "react";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import Button from '../button/Button';
import './SignInForm.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        resetFormFields();
    }catch(error){

      switch(error.code){
        case "auth/wrong-password": alert("Incorrect Password for Email");break;
        case "auth/user-not-found": alert("No User associated with this email");break;
        default: console.log(error);
      }
    }
    
}

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };
  
  return (
    <div className="sign-up-container">
        <h2>Already have an account ?</h2>
        <span>Sign ip with your email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput label="Email" type="email" name="email" value={email} required onChange={handleChange} />

            <FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange} />

            <div className="buttons-container">
              <Button type="submit">Sign In</Button>
              <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm
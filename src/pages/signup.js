import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';



export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        return firebase 
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user 
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    history.push(ROUTES.BROWSE)
                })
            )
            .catch((error) => {
                setFirstname('');
                setEmailAddress('');
                setPassword('');
                setError(error.message); 
            });        
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base>
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={ ({target}) => setFirstname(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            type="password"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit" >
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCaptcha and the Google Privacy Policy and Terms of Service apply.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
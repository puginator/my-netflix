import React from 'react';
import { OptForm, Feature } from '../components';
import { FaqsContainer } from '../containers/faqs'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";

export default function Home(){
    return (
        <>
            <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programs and more. </Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button><Form.Link to="/signup">Try it now</Form.Link></OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import { Navbar, Button, Dropdown, DropdownButton, Nav} from "react-bootstrap";

import { loginRequest, b2cPolicies } from "./authConfig";
import { useState } from "react";

const NavigationBar = () => {

    /**
     * useMsal is hook that returns the PublicClientApplication instance, 
     * an array of all accounts currently signed in and an inProgress value 
     * that tells you what msal is currently doing. For more, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
     */
    const { instance } = useMsal();
    
    const handleLogin = () => {
        instance.loginPopup(loginRequest)
            .catch((error) => console.log(error))
    }

    return (
        <>        
            <AuthenticatedTemplate>
                <div class="navLinks">
                    <Button variant="secondary" onClick="location.href='https://github.com/anahitaafsh/t20'">Github</Button>
                </div>
                <div className="ml-auto">
                    <Button variant="info" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto">Edit Profile</Button>
                    <DropdownButton variant="warning" className="ml-auto" drop="left" title="Sign Out">
                        <Dropdown.Item as="button" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })}>Sign out using Popup</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>Sign out using Redirect</Dropdown.Item>
                    </DropdownButton>
                </div>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div class="navLinks">
                    <Button variant="secondary" onClick="location.href='https://github.com/anahitaafsh/t20'">Github</Button>
                </div>
                <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
                    <Dropdown.Item as="button" onClick={handleLogin}>Sign in using Popup</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => instance.loginRedirect(loginRequest)}>Sign in using Redirect</Dropdown.Item>
                </DropdownButton>
            </UnauthenticatedTemplate>
        </>
    );
};

export const PageLayout = (props) => {
    //Variables for the form
    const [age, setAge] = useState('');
    const [systolicBP, setSystolicBP] = useState('');
    const [diastolicBP, setDiastolicBP] = useState('');
    const [bs, setBS] = useState('');
    const [bodyTemp, setBodyTemp] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleSystolicBPChange = (e) => {
        setSystolicBP(e.target.value);
    }
    const handleDiastolicBPChange = (e) => {
        setDiastolicBP(e.target.value);
    }
    const handleBSChange = (e) => {
        setBS(e.target.value);
    }
    const handleBodyTempChange = (e) => {
        setBodyTemp(e.target.value);
    }
    const handleHeartRateChange = (e) => {
        setHeartRate(e.target.value);
    }
    const handleRiskLevelChange = (e) => {
        setRiskLevel(e.target.value);
    }
    const handleSubmit = (e) => {
        alert('An entry was submitted with the Age:' + age +', SystolicBP: ' + systolicBP + ', DiastolicBP' +
        diastolicBP + ", Blood Sugar: " + bs + ", Body Temperature: " + bodyTemp + ", Heart Rate: " + heartRate + 
        ", and Risk Level: " + riskLevel);
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">2022 Aspire T20 Project</a>
                <Nav.Item><Nav.Link href = "/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href = "https://github.com/anahitaafsh/t20">GitHub1</Nav.Link></Nav.Item>
                <NavigationBar />
            </Navbar>
            <br />
            <h5><center>Welcome to the 2022 Aspire T20 Project!</center></h5>
            <br />
            <div id="names">
                <p>by </p>
                <p id="aayushi">Aayushi</p>
                <p id="ana">Anahita</p>
                <p id="ashwin">Ashwin </p>
                <p id="mel">Melody  </p>
                <p id="rachel">Rachel </p>
                <p>and </p>
                <p id="zach">Zach</p>
            </div>
            {props.children}
            <br />
            
            <h6>Project Steps </h6>
                <label class="container" id="ana">Deploy to App Service
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="mel">Find Dataset
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="ashwin">Create frontend
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="zach">Authenticate users with Azure AD
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="rachel">Clean and trim data
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="aayushi">Connect to IoT
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="mel">Connect to Database
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>
                <label class="container" id="ana">Continuous Deployment with Github
                    <input type="checkbox"/><span class="checkmark"></span>
                </label>

            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Age:
                </label><br/>
                <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
                {}
                <br/><label>
                SystolicBP:
                </label><br/>
                <input type="text" value={systolicBP} required onChange={(e) => {handleSystolicBPChange(e)}} /><br/>
                {}
                <br/><label>
                DiastolicBP:
                </label><br/>
                <input type="text" value={diastolicBP} required onChange={(e) => {handleDiastolicBPChange(e)}} /><br/>
                {}
                <br/><label>
                BS:
                </label><br/>
                <input type="text" value={bs} required onChange={(e) => {handleBSChange(e)}} /><br/>
                {}
                <br/><label>
                BodyTemp:
                </label><br/>
                <input type="text" value={bodyTemp} required onChange={(e) => {handleBodyTempChange(e)}} /><br/>
                {}
                <br/><label>
                HeartRate:
                </label><br/>
                <input type="text" value={heartRate} required onChange={(e) => {handleHeartRateChange(e)}} /><br/>
                {}
                <br/><label>
                RiskLevel:
                </label><br/>
                <input type="text" value={riskLevel} required onChange={(e) => {handleRiskLevelChange(e)}} /><br/>
                {}
                <br/><input type="submit" value="Submit"/>
            </form>
        </>
    );
};

export const IdTokenClaims = (props) => {
    return (
        <div id="token-div">
            <p><strong>Audience: </strong> {props.idTokenClaims.aud}</p>
            <p><strong>Issuer: </strong> {props.idTokenClaims.iss}</p>
            <p><strong>OID: </strong> {props.idTokenClaims.oid}</p>
            <p><strong>UPN: </strong> {props.idTokenClaims.preferred_username}</p>
        </div>
    );
}
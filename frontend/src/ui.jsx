/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import { Navbar, Button, Dropdown, DropdownButton, Nav} from "react-bootstrap";
import { useState } from "react";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import IdTokenClaims from "./components/msal/idTokenClaims";

import EntryForm from "./components/entryForm";
import WelcomeHeader from "./components/layout/welcomeHeader";
import NavBar from "./components/layout/navigation";
import ResultTable from "./components/layout/result-table";
import Description from "./components/layout/description";


export const PageLayout = (props) => {
    console.log(props);
    const [refresh, setRefresh]=useState(false);

    return (
        <>
                <NavBar/>
                <Description/>
                <EntryForm refresh={setRefresh}/>
                <ResultTable refresh={refresh}/>
        </>
    );
};


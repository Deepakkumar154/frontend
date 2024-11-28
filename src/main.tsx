import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";
import {LoginContextProvider} from "./context/LoginContextProvider.tsx";
import {UserContextProvider} from "./context/UserContextProvider.tsx";
import {SignUpContextProvider} from "./context/SignUpContextProvider.tsx";
import {AlertContextProvider} from "./context/AlertContextProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <LoginContextProvider>
                <SignUpContextProvider>
                    <UserContextProvider>
                        <AlertContextProvider>
                            <App/>
                        </AlertContextProvider>
                    </UserContextProvider>
                </SignUpContextProvider>
            </LoginContextProvider>
        </ThemeProvider>
    </BrowserRouter>,
)

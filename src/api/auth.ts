import {UserAgent} from "../Modal/UserAgent.ts";

export const loginUser = (email: string | undefined, password: string | undefined): Promise<any> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const request = new Request("http://localhost:8080/api/v1/auth/agent/login", {
        method: "POST",
        body: JSON.stringify({email: email, password: password}),
        headers: myHeaders
    });
    return fetch(request)
        .then(response => response.json())
        .catch(error => console.error('Error loging in:', error));
}

export const signUpUser = (user: UserAgent): Promise<any> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const request = new Request("http://localhost:8080/api/v1/auth/agent/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: myHeaders
    });
    return fetch(request)
        .then(response => response.json())
        .catch(error => console.error('Error Signing in:', error));
}

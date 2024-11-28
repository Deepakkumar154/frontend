// export const fetchAPIRequestInterceptor = async (endPoint: string, config: any, method: string, body?: any) => {
//     const {fetch: originalFetch} = window;
//     window.fetch = async (...args) => {
//         //setting the api token for the header
//         const user = JSON.parse(localStorage.getItem('user') || '{}');
//         const token = user?.token;
//         config.headers = config.headers || {};
//         config.headers["Authorization"] = `Bearer ${token}`;
//         config.headers["Content-Type"] = "application/json";
//         config.method = method;
//
//         if (method === "POST") {
//             config.body = body;
//         }
//
//         try {
//             return await originalFetch(endPoint, config);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             throw error;
//         }
//     };
// }

export const fetchAPIRequestInterceptor = async (endPoint: string, config: any, method: string, body?: any) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.token;
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    config.method = method;

    if (method === "POST") {
        config.body = body;
    }

    try {
        return await fetch(endPoint, config);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

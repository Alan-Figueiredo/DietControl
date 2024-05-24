async function apiControl(method, data, endpoint) {
    const Ngrokurl = process.env.API_URL3;
    
    const url = Ngrokurl + endpoint;
    
    if (method === "GET") {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

export default apiControl;

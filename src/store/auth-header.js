export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Origin':'*', 
            'Authorization': 'Bearer ' + user.token 
        };
    } else {
        return {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            // 'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Origin':'*',
        };
    }
}
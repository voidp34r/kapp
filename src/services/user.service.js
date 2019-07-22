// import config from 'config';
import { authHeader } from '../store/auth-header';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll
};

const config = () => {
    return JSON.stringify({
        apiUrl: '',
        appUrlSsl: 'https://localhost:5001',
    });
};

function updateUser(id, user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(user)
    };

    return fetch(`https://localhost:5001/api/v1/users/${id}`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('user', JSON.stringify(user));
        return user;
    })
    .catch( err => {
        console.log(err)
        return err;
    });

}

function createUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(user)
    };

    return fetch('https://localhost:5001/api/v1/users', requestOptions)
    .then(handleResponse)
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('user', JSON.stringify(user));
        return user;
    })
    .catch( err => {
        console.log(err)
        return err;
    });

}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ email, password })
    };

    return fetch(`https://localhost:5001/api/auth/login?email=${email}&password=${password}`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    })
    .catch( err => {
        console.log(err)
        return err;
    });

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://localhost:5001/api/v1/users?pageNumber=1&pageSize=50`, requestOptions)
    .then(handleResponse)
    .then(users => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('users', JSON.stringify(users));

        return users;
    })
    .catch( err => {
        console.log(err)
        return err;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
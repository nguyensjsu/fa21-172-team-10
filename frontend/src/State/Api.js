import axios from 'axios';

const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT
const propertyEndpoint = process.env.REACT_APP_PROPERTY_ENDPOINT
const paymentEndpoint = process.env.REACT_APP_PAYMENT_ENDPOINT

export const printEndpoints = () => {
    console.log("AUTH: ", authEndpoint);
    console.log("PROPERTY: ", propertyEndpoint);
    console.log("PAYMENT: ", paymentEndpoint);
}

export const login = async (username, password) => {
    const resp = await axios.post(authEndpoint + 'authenticate', {
        username, password
    });
    if (resp.status !== 200) {
        throw Error;
    }
    return resp.data;
}

export const register = async (username, password) => {
    const resp = await axios.post(authEndpoint + 'register', {
        username, password
    })
    if (resp.status !== 200) {
        throw Error;
    }
    return resp.data;
}

export const fetchProperties = async () => {
    const resp = await axios.get(propertyEndpoint + 'all');
    if (resp.status !== 200) {
        throw Error;
    }
    return resp.data;
}

export const postPayment = async (paymentData) => {
    const resp = await axios.post(paymentEndpoint + 'newPayment', paymentData);
    console.log(resp);
    if (resp.status !== 200) {
        throw Error;
    }
    return resp.data;
}

export const getOrderHistory = async (uID) => {
    const resp = await axios.get(paymentEndpoint + `bookings/user/${uID}`)
    console.log(resp);
    if (resp.status !== 200) {
        throw Error;
    }
    return resp.data;
}

export default {
    printEndpoints,
    login,
    register,
    fetchProperties,
    postPayment,
    getOrderHistory
}
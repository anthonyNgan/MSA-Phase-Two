import Axios from 'axios';
import { IChiropractors, ICalendar } from '../common/Interface';

/*const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://chiropractor-api.azurewebsites.net/api/" : "https://localhost:44361/api/";*/
const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://chiropractor-api.azurewebsites.net/api/" : "https://chiropractor-api.azurewebsites.net/api/";
const Chiropractor_API_URL = API_BASE_URL + "chiropractors/";
/*const Chiropractor_ID_API_URL = Chiropractor_API_URL + ${id};*/
const Calendar_API_URL = API_BASE_URL + "calendars/";

export const getArray = async () => {
    const response = await fetch(Chiropractor_API_URL, {
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    }).then((res) => res.json());
    return response;
}

export const postArray = async (data: IChiropractors | {}) => {
    const response = await fetch(Chiropractor_API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    })
    return response.json()
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}

export const editArray = async (id: any | {}) => {
    const response = await fetch(Chiropractor_API_URL + `${id}`, {
        method: 'PUT',
        body: JSON.stringify({
           
        }), 
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    })
    return response.json()
        .then(id => {
            console.log('Success:', id);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}

export const deleteArray = async (id: IChiropractors | {}) => {
    const response = await fetch(Chiropractor_API_URL + `${ id }`, {
        method: 'DELETE',
    })
    return response.json()
        .then(id => {
            console.log('Success:', id);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}

export const calendarEvents = async (id: ICalendar | {}) => {
    const response = await Axios.get('Calendar_API_URL')
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        })
    return response
}
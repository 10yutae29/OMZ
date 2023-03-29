import axios from "axios";

export const instance = axios.create({
  //baseURL: 'http://localhost:8080/api', 
  baseURL: 'http://j8a705.p.ssafy.io:8080/api',
  headers: { 
    "Content-Type": "application/json", 
},
});

export const imageUrl = 'https://storage.googleapis.com/omz-bucket/' 

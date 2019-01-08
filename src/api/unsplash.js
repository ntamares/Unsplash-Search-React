import axios from 'axios';

// creates an instance of axios client (custom)
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8b9c6e416b0336b3f8569ebba27166bea489eac2d55a5b48671ccffab339f8d8'
  }
});
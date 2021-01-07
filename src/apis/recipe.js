import axios from 'axios';

const APP_ID= '2d7be474'
const APP_KEY = '27f41bf2390f84f3fffe64799e175919';

export default axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    app_id: APP_ID,
    app_key: APP_KEY
  },
});
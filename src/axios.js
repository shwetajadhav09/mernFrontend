import axios from "axios";

const baseURL = 'http://localhost:8080';
const instance = axios.create({
    baseURL,
});

export const getReviews = async (productId) => {
    try {
      const response = await instance.get(`/reviews/${productId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export const submitReview = async (reviewData) => {
    try {
      const response = await instance.post('/reviews', reviewData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export default instance;

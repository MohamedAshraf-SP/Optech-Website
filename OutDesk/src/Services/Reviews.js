import axios from "axios";
const api = import.meta.env.VITE_API_URL;

// Get all items (GET request)
export const getAllItems = async () => {
  try {
    const response = await axios.get(`${api}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetch elements", error);
    throw error;
  }
};
// post item
export const addItem = async (newItem) => {
  try {
    const response = await axios.post(`${api}/review`, newItem);
    return response;
  } catch (error) {
    console.error("Error Add element", error);
    throw error;
  }
};
// Update Item
export const updateItem = async (Id, newItem) => {
  try {
    const response = await axios.put(`${api}/review/${Id}`, newItem);
    return response.data;
  } catch (error) {
    console.error("Error Update element", error);
    throw error;
  }
};
// Delete element
export const deleteItem = async (Id) => {
  try {
    const response = await axios.delete(`${api}/review/${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting element", error);
    throw error;
  }
};

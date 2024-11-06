import axios from "axios";

const api = import.meta.env.VITE_API_URL;
// handel sent message via email
export const sendEmail = async (data) => {
    console.log(data);
  try {
    const response = await axios.post(`${api}/emailsender`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

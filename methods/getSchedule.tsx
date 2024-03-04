import axios from "axios";

export const getSchedule = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/Schedule");
    return res;
  } catch (err) {
    console.log(err);
  }
};

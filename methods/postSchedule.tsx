import axios from "axios";

export const postSchedule = async (data: {
  name: string;
  last_name: string;
  date: Date;
}) => {
  try {
    const res = await axios.post("http://localhost:3000/api/Schedule", data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

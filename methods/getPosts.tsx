import axios from "axios";

export const getPosts = async (
  setState: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const res = await axios.get("http://localhost:3000/api/GetPosts");
    setState(res.data);
  } catch (err) {
    console.log(err);
  }
};
export const getPost = async (
  setState: React.Dispatch<React.SetStateAction<never[]>>,
  postId: string | number
) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/GetPost`, {
      params: {
        postId: postId,
      },
    });
    console.log(res);
    setState(res.data);
  } catch (err) {
    console.log(err);
  }
};

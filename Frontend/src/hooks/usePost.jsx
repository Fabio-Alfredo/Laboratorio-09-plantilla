import axios from "axios";
import { useCallback, useState } from "react";
// import { getToken } from "../utils/Utils";

const usePost = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    async (data) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`,
          },
        });
        return response.data;
      } catch (e) {
        setError(e);
        throw e.response.data;
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { postData, error, loading};
};

export default usePost;
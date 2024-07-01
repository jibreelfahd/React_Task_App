import { useState, useCallback } from "react";

const useHttpRequest = (applyData) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      applyData(data);

    } catch (error) {
      setError("Something happened, Try Again Later");
      console.log(error);
    }
    setIsLoading(false);
  }, [applyData]);

  return {
    error,
    isLoading,
    sendRequest
  }
};

export default useHttpRequest;

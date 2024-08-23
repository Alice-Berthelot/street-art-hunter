import { getToken } from "./getToken";

const token = getToken();

export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      headers: {
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

export async function sendData(url, data, http) {
  try {
    const options = {
      method: http,
      body: data instanceof FormData ? data : JSON.stringify(data),
    };

    if (!(data instanceof FormData)) {
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    if (token) {
      options.headers = {
        ...options.headers,
        "Authorization": `Bearer ${token}`,
      };
    }

    const response = await fetch(import.meta.env.VITE_API_URL + url, options);
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
    return null;
  }
}

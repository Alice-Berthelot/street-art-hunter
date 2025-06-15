export async function fetchApi(url) {
  const token = localStorage.getItem("token");
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

    options.headers = data instanceof FormData
    ? {}
    : { "Content-Type": "application/json" };

    const token = localStorage.getItem("token");

    if (token) {
      options.headers = {
        ...options.headers,
        "Authorization": `Bearer ${token}`,
      };
    }

    const response = await fetch(import.meta.env.VITE_API_URL + url, options);
    return response;
  } catch (error) {
    return null;
  }
}

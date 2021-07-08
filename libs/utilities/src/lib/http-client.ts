async function httpClient<T>(
  url: string,
  { data = null, headers: customHeaders = null, customConfig = {} } = {},
  token = null
): Promise<T> {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  const response = await fetch(url, config);
  const parsedData = await response.json();
  if (response.ok) {
    return parsedData;
  } else {
    return Promise.reject(parsedData);
  }
}

async function formDataHttpClient<T>(
  url: string,
  data: FormData,
  { headers: customHeaders = null, customConfig = {} } = {},
  token = null
): Promise<T> {
  const config = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  const response = await fetch(url, config);
  const parsedData = await response.json();
  if (response.ok) {
    return parsedData;
  } else {
    return Promise.reject(parsedData);
  }
}

export { httpClient, formDataHttpClient };

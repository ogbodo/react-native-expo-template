/*
 *`ALL NETWORK API REQUESTS AND INTERCEPTOR BUILDER
 * @method POST - http verb for request
 * @method GET - http verb for get
 * @method DELETE - http verb for delete
 * @method PUT - http verb for update
 * @GET - send a get request to the server
 * @POST - send a post request to the server
 * @DELETE - send a delete request to the server
 * @PUT - send a put request to the server
 */

import axios, { AxiosInstance } from 'axios';

import ENV_VARIABLES, { EnvPropsTypes } from '../../config';
import { REQUEST_TYPES } from './type';
import { CONTENT_TYPES_ENUM } from '../../constants';

class API {
  private API_VERSION: string;
  private axiosInstance: AxiosInstance;

  constructor(ENV: EnvPropsTypes) {
    this.API_VERSION = 'v1';
    this.axiosInstance = axios.create({
      baseURL: ENV.EXAMPLE_BASE_URI
    });
  }

  // Handles all GET requests
  get(request: REQUEST_TYPES) {
    const { path } = request;

    if (Array.isArray(path)) {
      const mappedRequests = path.map(aPath =>
        this.makeGetRequest({ ...request, path: aPath })
      );
      return axios.all(mappedRequests);
    }

    return this.makeGetRequest(request);
  }

  // Make a get request
  makeGetRequest(request: REQUEST_TYPES) {
    const { apiVersion, path, payload, contentType } = request;
    const URL = `/${apiVersion || this.API_VERSION}/${path}`;
    return this.axiosInstance.get(URL, {
      headers: getHeaderOptions(payload.authToken, contentType),
      params: { ...request.params }
    });
  }

  // Handles all POST requests
  post(request: REQUEST_TYPES) {
    const { apiVersion, path, payload, contentType } = request;
    const { authToken, ...rest } = payload;
    const URL = `/${apiVersion || this.API_VERSION}/${path}`;
    return this.axiosInstance.post(URL, rest, {
      headers: getHeaderOptions(authToken, contentType),
      params: { ...request.params }
    });
  }

  // Handles all PUT requests
  put(request: REQUEST_TYPES) {
    const { apiVersion, path, payload, contentType } = request;
    const { authToken, ...rest } = payload;
    const URL = `/${apiVersion || this.API_VERSION}/${path}`;
    return this.axiosInstance.put(URL, rest, {
      headers: getHeaderOptions(authToken, contentType),
      params: { ...request.params }
    });
  }

  // Handles all PATCH requests
  patch(request: REQUEST_TYPES) {
    const { apiVersion, path, payload, contentType } = request;
    const { authToken, ...rest } = payload;

    const URL = `/${apiVersion || this.API_VERSION}/${path}`;
    return this.axiosInstance.patch(URL, rest, {
      headers: getHeaderOptions(authToken, contentType),
      params: { ...request.params }
    });
  }

  // Handles all DELETE requests
  delete(request: REQUEST_TYPES) {
    const { apiVersion, path, payload, contentType } = request;
    const URL = `/${apiVersion || this.API_VERSION}/${path}`;
    return this.axiosInstance.delete(URL, {
      headers: getHeaderOptions(payload.authToken, contentType)
    });
  }
}

const getHeaderOptions = (authToken: string, contentType: string) => {
  return {
    'Content-Type': contentType || CONTENT_TYPES_ENUM.APPLICATION_JSON,
    Authorization: `Bearer ${authToken}`
  };
};
export default new API(ENV_VARIABLES);

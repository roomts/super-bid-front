import axios from 'axios';
import {serialize} from '../commons/utils';
import qs from 'qs';

export default class BaseHttpService {
  constructor() {
    this.bearerToken  = "0a9123e87d87d2afd744a6e9ade20b6b40a746f75426936ab050f0d41c0e6e5d";
    this.signupAuthorization = "0a9123e87d87d2afd744a6e9ade20b6b40a746f75426936ab050f0d41c0e6e5d";
    this.header = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    };

    this.loginHeader = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    };

    this.signupHeader = {
      headers: {
        Authorization: this.signupAuthorization,
      },
    };

    this.autoLoginHeader = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    };
  }

  setHeader = (params) => {
    this.header = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
        ...params,
      },
    };
  };

  resetHeader = () => {
    this.header = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    };
  };

  // Methods Rest
  // Principals parameters:
  // url: Method URL
  // payload: parameters to send through call
  // removeBearerToken: when explicit defined, makes the call without the bearer token in the header
  get = (url, removeBearerToken) => {
    // return axios.get(url, !removeBearerToken && this.header);
    return axios.get(url);
  };

  getSignup = (url) => {
    return axios.get(url, this.signupHeader);
  };

  getWithParams = (url, params) => {
    return axios.get(url, {
      headers: this.header,
      params: params,
      paramsSerializer: (params) => {
        return serialize(params);
      },
    });
  };

  getWithPagination = (url, params, removeBearerToken) => {
    return axios.get(url, {
      headers: !removeBearerToken ? this.header : null,
      params: params,
      paramsSerializer: (params) => {
        return serialize(params);
      },
    });
  };

  post = (url, payload, removeBearerToken) =>
    axios.post(url, payload, !removeBearerToken && this.header);

  postLogin = (url, payload) => axios.post(url, payload, this.loginHeader);

  postSignup = (url, payload) => axios.post(url, payload, this.signupHeader);

  autoLoginPost = (url, payload) =>
    axios.post(url, payload, this.autoLoginHeader);

  put = (url, payload, removeBearerToken) =>
    axios.put(url, payload, !removeBearerToken && this.header);

  putSignupHeader = (url, payload, removeBearerToken) =>
    axios.put(url, payload, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

  patch = (url, payload, removeBearerToken) =>
    axios.patch(url, payload, !removeBearerToken && this.header);

  _delete = (url, removeBearerToken) =>
    axios.delete(url, !removeBearerToken && this.header);

  upload = (url, formData) =>
    axios.post(url, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });

  postCredisfera = (url, payload) =>
    axios.post(url, qs.stringify({grant_type: 'client_credentials'}), {
      auth: {
        username: payload.username,
        password: payload.password,
      },
    });

  postCredisferaWithAuth = (url, token, payload) =>
    axios.post(url, payload, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
}

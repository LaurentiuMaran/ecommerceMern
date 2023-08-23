import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_API_URL;
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = Cookies.get('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(BASE_URL, httpClient);

const adminDataProvider = {
  ...dataProvider,
  getList: (resource, params) => {
    return dataProvider.getList(resource, params).then((response) => {
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        const mappedData = response.data.data.map((item) => ({
          ...item,
          id: item._id,
        }));

        return {
          data: mappedData,
          total: mappedData.length,
        };
      } else {
        console.error('Unexpected response format', response);
        throw new Error('Data is not an array');
      }
    });
  },
  getOne: (resource, params) => {
    return dataProvider.getOne(resource, params).then((response) => {
      if (resource === 'orders') {
        if (
          response.data &&
          response.data.success &&
          response.data.order &&
          response.data.order._id
        ) {
          return {
            data: {
              ...response.data.order,
              id: response.data.order._id,
            },
          };
        } else {
          console.error('Unexpected response format for orders', response);
          throw new Error('Order data does not have an id');
        }
      } else {
        if (response.data && response.data._id) {
          return {
            data: {
              ...response.data,
              id: response.data._id,
            },
          };
        } else {
          console.error('Unexpected response format', response);
          throw new Error('Data does not have an id');
        }
      }
    });
  },

  update: (resource, params) => {
    return dataProvider.update(resource, params).then((response) => {
      if (response.data && !response.data.id && response.data._id) {
        return {
          data: {
            ...response.data,
            id: response.data._id,
          },
        };
      } else {
        console.error('Unexpected response format', response);
        throw new Error('Data does not have an id');
      }
    });
  },
  create: (resource, params) => {
    return dataProvider.create(resource, params).then((response) => {
      if (response.data && response.data.success && response.data.product) {
        const product = response.data.product;
        if (!product.id && product._id) {
          return {
            data: {
              ...product,
              id: product._id,
            },
          };
        } else {
          console.error('Unexpected response format', response);
          throw new Error('Data does not have an id');
        }
      } else {
        console.error('Unexpected response format', response);
        throw new Error('Data does not have an id');
      }
    });
  },
};

export default adminDataProvider;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit/';
import { toast } from 'react-toastify';
import { store } from '../app/store';
import endpoints from '../api/endpoints';

const baseQuery = fetchBaseQuery({
  baseUrl: endpoints.baseUrl,
  prepareHeaders: async (headers) => {
    // add bearer token to headers
    headers.set('authorization', `Bearer ${store.getState().auth.token}`);
    headers.set('instId', '1');
    headers.set('branchId', '1');
    return headers;
  },
});

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  refetchOnFocus: true,
});

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast.error(action?.payload?.data?.message?.join(', '));
  }
  return next(action);
};

import { toast } from 'react-toastify';
import { apiSlice } from '../http/HttpRequest';
import { store } from '../app/store';
import endpoints from '../api/endpoints';
import { setUser } from '../components/templates/loginTemplate/LoginSlice';
const getToken = store.getState().auth.token;

export const apiCall = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    get: builder.query({
      query: (apiUrl) => ({
        url: apiUrl,
        method: 'GET',
        headers: {
          'Accept-Language': 'en',
        },
      }),
      keepUnusedDataFor: 0,
    }),
    patch: builder.mutation<void, { apiUrl: string; formData: unknown }>({
      query: ({ apiUrl, formData }) => ({
        url: apiUrl,
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
        body: JSON.stringify(formData),
      }),
    }),
    post: builder.mutation<void, { apiUrl: string; formData: unknown }>({
      query: ({ apiUrl, formData }) => ({
        url: apiUrl,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
        body: JSON.stringify(formData),
      }),
    }),
    put: builder.mutation<void, { apiUrl: string; formData: unknown }>({
      query: ({ apiUrl, formData }) => ({
        url: apiUrl,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
        body: JSON.stringify(formData),
      }),
    }),
    delete: builder.mutation<void, { apiUrl: string; id?: unknown }>({
      query: ({ apiUrl, id }) => ({
        url: `${apiUrl}/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
      }),
    }),
    // logout: builder.mutation<void, void>({
    //   query: () => ({
    //     url: endpoints.idp_microservice_logout,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept-Language': 'en',
    //     },
    //   }),
    // }),
    login: builder.mutation({
      query: (credentials) => ({
        url: endpoints.login,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
        },
        body: credentials,
      }),
      transformResponse: (baseQueryReturnValue, fetchBaseQueryMeta) => {
        if (fetchBaseQueryMeta?.response?.ok) {
          const token = fetchBaseQueryMeta.response.headers.get('Jwttoken');
          const refToken = fetchBaseQueryMeta.response.headers.get('Jwtrefreshtoken');
          if (token) {
            store.dispatch(setUser({ refToken: refToken, token: token, userInfo: baseQueryReturnValue }));
          }

          return {
            data: baseQueryReturnValue,
            token,
          };
        }
      },
    }),
  }),
});

export const {
  useGetQuery,
  useLazyGetQuery,
  usePostMutation,
  usePatchMutation,
  usePutMutation,
  useLoginMutation,
  useDeleteMutation,
} = apiCall;

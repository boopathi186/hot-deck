import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hotdeck-dev-api-manager.azure-api.net/deckcreation/',
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getDecks: build.query({
      query: () => 'getDecks',
    }),
    getChallenges: build.query({
      query: () => 'getChallenges',
    }),
    getPlayers: build.query({
      query: () => 'getPlayers',
    }),
  }),
});

export const { useGetDecksQuery, useGetChallengesQuery, useGetPlayersQuery } = getApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Deck {
   data: [];
}


export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://2b33-103-160-171-236.ngrok-free.app',
    prepareHeaders: (headers) => {
     const tokens= sessionStorage.getItem('token');
     if(tokens){
      headers.set('Authorization', `Bearer ${tokens}`);}
      headers.set('ngrok-skip-browser-warning', 'true');
      return headers;
    },
  }),
  endpoints: (build) => ({
    getDecks: build.query<Deck, void>({
      query: () => '/api/users/getDecks',
    }),
    getChallenges: build.query<Deck, void>({
      query: () => '/api/users/getChallenge',
    }),
    getCustomer: build.query<Deck, void>({
      query: () => '/api/users/getCustomer',
    }),
  }),
});

export const { useGetDecksQuery, useGetChallengesQuery, useGetCustomerQuery} = getApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface Credentials {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

interface Deck {
  data: string[];
  parent_card_count: string;
  cover_image_url: string;
  id: string;
  display_id: string;
  title: string;
  subtitle: string;
  coverImageUrl: string;
  status: number;
  coverImageFileName: string;
  totalCount: number;
}
interface CustomerData {
  status: number;
  referral: string;
  phone_number: string;
  no_of_decks: number;
  lastlogin: string;
  id: string;
  title: string;
}

interface Challenge {
  challenge_id: string; 
  response_type: number;
  tags: string;
  challenge_name: string;
  display_id: string;
  status: number;
}
export const getApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://9ab1-103-160-171-236.ngrok-free.app',
    prepareHeaders: (headers) => {
     const tokens= sessionStorage.getItem('token');
     if(tokens){
      headers.set('Authorization', `Bearer ${tokens}`);}
      headers.set('ngrok-skip-browser-warning', 'true');
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, Credentials>({
      query: (credential) => ({
        url: '/api/users/login',
        method: 'POST',
        body: credential,
      }),
    }),
    getDecks: build.query<Deck[], void>({
      query: () => '/api/users/getDecks',
    }),
    getChallenges: build.query<Challenge[], void>({
      query: () => '/api/users/getChallenge',
    }),
    getCustomer: build.query<CustomerData[], void>({
      query: () => '/api/users/getCustomer',
    }),
  }),
});

export const { useGetDecksQuery, useGetChallengesQuery, useGetCustomerQuery,useLoginMutation} = getApi;

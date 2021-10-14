import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '5c04b6e741msh77cbbf7c24c21a9p140835jsn829b8a353a65',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchange : builder.query({
            query: () => createRequest(`/exchanges`)
        }),
        getCryptoDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory : builder.query({
            query : ({ coinId , timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
        }),
        
    })
});


export const { 
    useGetCryptosQuery,
    useGetExchangeQuery,
    useGetCryptoDetailsQuery, 
    useGetCryptoHistoryQuery,
 } = cryptoApi;
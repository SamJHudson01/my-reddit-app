import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RedditApiResponse } from '../interfaces/redditPost'

export const redditApi = createApi({
  reducerPath: 'redditApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com/' }),
  endpoints: (builder) => ({
    getRedditPosts: builder.query<RedditApiResponse, string>({
      query: (searchTerm: string) => searchTerm ? `search.json?q=${encodeURIComponent(searchTerm)}` : '.json',
    }),
  }),
})

export const { useGetRedditPostsQuery } = redditApi
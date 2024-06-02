// src/interfaces/redditPost.ts

export interface RedditPost {
  data: {
    id: string;
    title: string;
    author: string;
    num_comments: number;
    score: number;
    subreddit: string;
    permalink: string;
    thumbnail: string;
    url: string;
    created_utc: number;
  };
}

export interface RedditApiResponse {
  data: {
    children: RedditPost[];
  };
}

import React from "react";
import { RedditPost } from "../../interfaces/redditPost";
import RedditPostCard from "../redditPostCard/RedditPostCard";
import "./searchResults.css";

interface SearchResultsProps {
  posts: RedditPost[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ posts }) => {
  return (
    <div className="search-results">
      {posts.map((post: RedditPost) => (
        <RedditPostCard key={post.data.id} post={post} />
      ))}
    </div>
  );
};

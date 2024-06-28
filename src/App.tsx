import React, { useState } from "react";
import "./App.css";
import { RedditPost } from "./interfaces/redditPost";
import { SearchResults } from "./components/searchResults/SearchResults";
import SearchBar from "./components/searchBar/SearchBar";
import { useGetRedditPostsQuery } from "./store/redditFetch";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useGetRedditPostsQuery(searchTerm);

  const redditPosts: RedditPost[] = data?.data.children ?? [];

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <SearchResults posts={redditPosts} />
    </div>
  );
};

export default App;
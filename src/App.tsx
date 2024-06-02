// src/App.tsx
import React from "react";
import "./App.css";
import { RedditPost, RedditApiResponse } from "./interfaces/redditPost";
import { SearchResults } from "./components/searchResults/SearchResults";

const App: React.FC = () => {
  const [redditPosts, setRedditPosts] = React.useState<RedditPost[]>([]);

  React.useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => {
        return res.json();
      })
      .then((json: RedditApiResponse) => {
        console.log(json);
        setRedditPosts(json.data.children);
      });
  }, []);

  return (
    <div>
      <h1>Reddit Posts</h1>
      <SearchResults posts={redditPosts} />
    </div>
  );
};

export default App;

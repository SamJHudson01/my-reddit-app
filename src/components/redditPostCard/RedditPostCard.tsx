// src/RedditPostCard.tsx
import React from "react";
import { RedditPost } from "../../interfaces/redditPost";
import "./redditPostCard.css";

interface RedditPostCardProps {
  post: RedditPost;
}

const RedditPostCard: React.FC<RedditPostCardProps> = ({ post }) => {
  const decodeURL = (url: string) => {
    return url.replace(/&amp;/g, "&");
  };

  const imageUrl = post.data.preview?.images[0]?.source?.url
    ? decodeURL(post.data.preview.images[0].source.url)
    : "https://via.placeholder.com/600x200";

  console.log(post);
  return (
    <div className="reddit-post-card">
      <div className="reddit-post-card__top-bar">
        <div className="reddit-post-card__top-bar-details">
          <p className="reddit-post-card__author">u/{post.data.author}</p>
          <p className="reddit-post-card__subreddit">{post.data.subreddit}</p>
        </div>
        <a href={post.data.url} className="reddit-post-card__image-link">
          <img
            src={imageUrl ? imageUrl : "https://via.placeholder.com/600x200"}
            alt="thumbnail"
            className="reddit-post-card__image"
          />{" "}
        </a>
      </div>
      <div className="reddit-post-card__content">
        <a
          href={`https://reddit.com${post.data.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="reddit-post-card__title"
        >
          {post.data.title}
        </a>
        <a
          href={post.data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="reddit-post-card__external-link"
        >
          External Link
        </a>
        <div className="reddit-post-card__votes">
          <p className="reddit-post-card__votes-count">{post.data.score}</p>
          <p className="reddit-post-card__votes-label">Upvotes</p>
        </div>
      </div>
    </div>
  );
};

export default RedditPostCard;

// src/RedditPostCard.tsx
import React from "react";
import { RedditPost } from "../../interfaces/redditPost";
import "./redditPostCard.css";

interface RedditPostCardProps {
  post: RedditPost;
}

const RedditPostCard: React.FC<RedditPostCardProps> = ({ post }) => {
  return (
    <div className="reddit-post-card">
      <div className="reddit-post-card__content">
        <div className="reddit-post-card__votes">
          <p className="reddit-post-card__votes-count">{post.data.score}</p>
          <p className="reddit-post-card__votes-label">Upvotes</p>
        </div>
        <div className="reddit-post-card__details">
          <a
            href={`https://reddit.com${post.data.permalink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reddit-post-card__title"
          >
            {post.data.title}
          </a>
          <p className="reddit-post-card__author">by {post.data.author}</p>
          <p className="reddit-post-card__comments">
            {post.data.num_comments} comments
          </p>
          <p className="reddit-post-card__subreddit">
            Subreddit: {post.data.subreddit}
          </p>
          <p className="reddit-post-card__created">
            Created: {new Date(post.data.created_utc * 1000).toLocaleString()}
          </p>
          <a
            href={post.data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reddit-post-card__external-link"
          >
            External Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedditPostCard;

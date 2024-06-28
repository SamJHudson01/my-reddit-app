import { test, expect } from "@playwright/test";

test("search functionality", async ({ page }) => {
  // Navigate to the app
  await page.goto("http://localhost:5173"); // Adjust this URL to match your dev server

  // Check if the search bar is visible
  await expect(page.locator(".search-bar__input")).toBeVisible();

  // Type a search query
  await page.fill(".search-bar__input", "playwright");

  // Click the search button
  await page.click(".search-bar__button");

  // Wait for the search results to load
  await page.waitForSelector(".search-results");

  // Check if search results are displayed
  const searchResults = page.locator(".search-results");
  await expect(searchResults).toBeVisible();

  // Check if at least one post is displayed
  const posts = page.locator(".reddit-post-card");
  await expect(posts).toHaveCount(25);

  // Check if the first post contains the search term
  const firstPostTitle = posts.first().locator(".reddit-post-card__title");
  await expect(firstPostTitle).toContainText(/playwright/i);
});

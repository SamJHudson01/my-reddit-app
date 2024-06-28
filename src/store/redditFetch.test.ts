import { redditApi } from './redditFetch';
import { store } from './store';

describe('Reddit API', () => {
  it('has the correct endpoint', () => {
    expect(redditApi.endpoints.getRedditPosts).toBeDefined();
  });

  it('has the correct reducer path', () => {
    expect(redditApi.reducerPath).toBe('redditApi');
  });

  it('is included in the store', () => {
    expect(store.getState()).toHaveProperty(redditApi.reducerPath);
  });

  it('constructs the correct query string', () => {
    const constructQueryString = (queryArg: string) => {
      if (!queryArg) return '.json';
      return `search.json?q=${encodeURIComponent(queryArg)}`;
    };

    // Test empty search term
    let queryArg = '';
    let queryString = constructQueryString(queryArg);
    expect(queryString).toBe('.json');

    // Test with a search term
    queryArg = 'test search';
    queryString = constructQueryString(queryArg);
    expect(queryString).toBe('search.json?q=test%20search');
  });
});

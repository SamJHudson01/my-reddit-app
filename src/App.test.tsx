import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import App from './App';
import { RootState } from './store/store'; // Adjust this import according to your project structure

const mockStore = configureStore<Partial<RootState>>([]);

jest.mock('./store/redditFetch', () => ({
  useGetRedditPostsQuery: () => ({
    data: { data: { children: [{ data: { title: 'Test Post', id: '1' } }] } },
    error: null,
    isLoading: false,
  }),
}));

describe('App', () => {
  let store: MockStoreEnhanced<Partial<RootState>>;

  beforeEach(() => {
    store = mockStore({
      redditApi: {
        queries: {},
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {
          reducerPath: 'redditApi',
          online: true,
          focused: true,
          middlewareRegistered: true,
          refetchOnMountOrArgChange: true,
          refetchOnReconnect: false,
          refetchOnFocus: false,
          keepUnusedDataFor: 60,
          invalidationBehavior: 'immediately',
        },
      },
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });
});

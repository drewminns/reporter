import { render, cleanup } from 'svelte-testing-library';
import App from '../src/components/App.svelte';

beforeEach(cleanup);
describe('App', () => {
  test('should render greeting', () => {
    const { getByText } = render(App, { props: { name: 'world' } });

    const textNode = getByText('Hello! world!');

    expect(textNode).toBe('Hello! world!');
  });
});

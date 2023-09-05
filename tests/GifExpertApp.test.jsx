import { render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Testing <GifExpertApp /> component', () => {
  test('debe de hacer match con el snapshot ', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifExpertApp />);

    expect(screen.getByText('Gif Expert App')).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/Components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid /> component', () => {
  const category = 'Dragon Ball';

  test('debe de mostrar el loading inicialmente ', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {
    const gifs = [
      {
        id: 1,
        title: 'dragon',
        url: 'https://dragon.com/dragon.jpg'
      },
      {
        id: 2,
        title: 'ball',
        url: 'https://ball.com/ball.jpg'
      }
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

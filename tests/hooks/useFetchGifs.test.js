import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing useFetchGifs hook', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de images y el isloading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

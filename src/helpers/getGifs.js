export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=HHsg6uQOnCwnE19i04IlTygI35Vv77o9&q=${category}&limit=10`;
  const res = await fetch(url);

  const { data } = await res.json();

  const gifs = data?.map(({ id, title, images: { downsized_medium } }) => ({
    id: id,
    title: title,
    url: downsized_medium.url
  }));

  return gifs;
};

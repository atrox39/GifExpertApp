export default async function getGifs(category) {
  const api = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es&api_key=cNnuig3GSCUwsFXsFd0JdFZfe4q6EOkZ`;
  const response = await fetch(api);
  const { data } = await response.json();
  return data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
}

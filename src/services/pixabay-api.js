function fetchImages(imageName, page) {
  return fetch(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=19012296-41da2131aa4097137b6521ff0&image_type=all&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.rejected(new Error(`No response from server`));
  });
}

const api = {
  fetchImages,
};

export default api;

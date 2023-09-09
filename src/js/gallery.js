import { UnsplashAPI } from "./unsplash-api";
import refs from "./refs";
import galerryCard from "../templates/galerry-card.hbs"

const unsplashApi = new UnsplashAPI(12);

refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const searchQuery = e.currentTarget.elements["user-search-query"].value.trim();

    if (!searchQuery) {
        return alert("Please enter query")
    }

    unsplashApi.query = searchQuery;
    unsplashApi.page = 1;

    unsplashApi.getPhotos().then((data) => {
        alert(`We find: ${data.total}`);

        refs.list.innerHTML = galerryCard(data.results);
    })
}





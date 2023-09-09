import { UnsplashAPI } from "./unsplash-api";
import refs from "./refs";
import galerryCard from "../templates/galerry-card.hbs"

const unsplashApi = new UnsplashAPI(12);

refs.form.addEventListener("submit", onSubmit);

const observer = new IntersectionObserver((entries, observer) => {
    
    console.log(entries);
    if (entries[0].isIntersecting) {
        loadMoreData();
    }
}, {
    root: null,
    rootMargin: "600px",
    threshold: 1,
})

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
        if (data.total_pages === 1) {
            return 
        }
        observer.observe(document.querySelector('.target-element'));
    }).catch(err => console.log(err))
}

function loadMoreData(e) {
    
    unsplashApi.page += 1;

    unsplashApi.getPhotos().then(res => {
        if (unsplashApi.page === res.total_pages) {
            observer.unobserve(document.querySelector('.target-element'));
        }
        refs.list.insertAdjacentHTML('beforeend', galerryCard(res.results))
    }).catch((err) => console.log(err))
}



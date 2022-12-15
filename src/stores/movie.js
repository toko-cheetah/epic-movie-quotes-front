import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const movies = ref(null);
  const genres = ref([
    "Action",
    "Sci-Fi",
    "Drama",
    "Comedy",
    "Horror",
    "Western",
    "Romance",
    "Adventure",
  ]);
  const movie = ref(null);
  const movieGetKey = ref(0);

  function incrementKey() {
    movieGetKey.value++;
  }

  return { movies, genres, movie, movieGetKey, incrementKey };
});

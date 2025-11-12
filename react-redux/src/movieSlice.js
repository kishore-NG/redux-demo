import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [
        { id: 1, title: "Inception", genre: "Sci-Fi" },
        { id: 2, title: "The Dark Knight", genre: "Action" },
        { id: 3, title: "Interstellar", genre: "Sci-Fi" },
    ],
}

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
        state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      // Accept either an id or a payload object with an `id` field
      const id = action.payload && action.payload.id ? action.payload.id : action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
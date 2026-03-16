"use strict";

export async function fetchMovies(apiUrl, category, mediaType, options = {}) {
  const res = await fetch(`${apiUrl}/${category}/${mediaType}`, options);
  if (!res.ok) throw new Error("FAILED TO FETCH MOVIES");

  const data = await res.json();

  return data;
}

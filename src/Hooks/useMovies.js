import { options, apiUrl } from "../Services/config";
import { fetchMovies } from "../Services/fetchMovies";
import { useState, useEffect } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies(apiUrl, "discover", "movie", options);
        setMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movies, loading, error };
}

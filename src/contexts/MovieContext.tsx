import { createContext, useContext, useEffect, useState } from "react";
import { MovieModel } from "../models/Movie";
import { ReactNode } from "react";

// should be in the types directory
interface MovieContextType {
  favorites: MovieModel[];
  addFavorite: (movie: MovieModel) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

interface MovieProviderProps {
  children: ReactNode;
}


const MovieContext = createContext<MovieContextType | undefined>(undefined)

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};


//export const MovieProvider = ({children: ReactNode}) => {
export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<MovieModel[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }
    , [favorites])

  const addFavorite = (movie: MovieModel) => {
    setFavorites(prev => [...prev, movie])
  }
  const removeFavorite = (movieId: number) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }
  const isFavorite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }
  return <MovieContext.Provider value={value}> 
    {children}
  </MovieContext.Provider>
}

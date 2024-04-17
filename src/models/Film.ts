import mongoose from "mongoose"
import { IDirector } from "./Director"

export interface IFilm {
    title: string,
    releaseYear: number,
    genre: string,
    directors: IDirector[]
}

const FilmSchema = new mongoose.Schema<IFilm>({
    title: String,
    releaseYear: Number,
    genre: String,
    directors: [{
      name: String,
      birthDate: Date,
      biography: String
    }]
  });

const Film = mongoose.model<IFilm>('Film', FilmSchema);


export default Film
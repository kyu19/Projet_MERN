import mongoose from "mongoose"
import { IDirector } from "./Realisateur"

export interface IFilm {
    title: string,
    releaseYear: number,
    genre: string,
    directors: IDirector[]
}


const Film = mongoose.model('Film')

export default Film
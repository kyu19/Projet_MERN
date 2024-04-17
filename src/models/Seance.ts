import mongoose from "mongoose"
import {IFilm} from "./Film"
 
export interface ISession  {
    film: IFilm; 
    date: Date; 
    time: string;
    availableSeats: number;

}


const Session = mongoose.model('Session')

export default Session
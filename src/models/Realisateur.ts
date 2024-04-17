import mongoose from "mongoose"

export interface IDirector {
    name: string; 
    birthDate: Date; 
    biography: string;
}


const Director = mongoose.model('Director')

export default Director
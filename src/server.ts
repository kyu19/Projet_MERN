import express, { Express, Request, Response} from 'express'


const app: Express = express()



import mongoose from 'mongoose'
const uri = "mongodb+srv://mern:mern@cluster0.ofjlexz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error)
  }
}
run().catch(console.dir);

// const Schema = mongoose.Schema;





// const monSchema = new Schema({
//     nom: String,
//     age : String,
//     email: { type: String, unique: true }

// })


// const monmodele = mongoose.model('banane', monSchema)

// let doc = new monmodele({nom : "bob"})
// doc.save()

// let doc = new monmodele({nom : 'pierre', prenom : 'rip', email : 'ttt@gmail.com'})
// doc.save()


// monmodele.updateOne({nom : 'pierre'}, {email: 'pierre@gmail.com'});

// let doc = new monmodele({ nom: 'Alice', age: 25, email: 'alice@example.com' });
// doc.save();

// monmodele.updateOne({ nom: 'Alice' }, { age: 26 }, {});

// monmodele.find({ age: { $gte: 18 } }, function(err, docs) {});





// const PORT = 3002

// app.use(express.json())
// app.use('/api/livres', livreRoutes)
// app.use('/api/auteurs', auteurRoutes)


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })





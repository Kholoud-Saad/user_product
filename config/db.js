import mongoose from 'mongoose';

//connect to mongoDB
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect('mongodb://localhost/sign-up')
    }
    catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    } 
}

export default connectDB
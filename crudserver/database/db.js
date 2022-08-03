import mongoose from 'mongoose';

const connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.ztx5i.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            // useNewUrlParse: true,
            

        });
        console.log('connection done')
    }
    catch(err){
        console.log(err.message)
    }
}

export default connection;
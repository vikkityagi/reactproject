import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const schema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
    
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, 'reactadduserschema');

const user1 = mongoose.model('reactadduserschema',schema);

export default user1;
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const schema = mongoose.Schema({
    bookname: {
        type: String
    },
    author: {
        type: String
    },
    borrowed: {
        type: String
    },
    datetime: {
        type: Date,
        default: Date.now()
    },
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, 'reactbookschema');

const user = mongoose.model('reactbookschema',schema);

export default user;
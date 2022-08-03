import AddUser from '../model/schema1.js';

export const addUser2 = async (request, response) => {
    try{
        const users = await AddUser.find();
        console.log(users)
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addUser = (req,res) => {
    const user = new AddUser({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    user.save((error,result)=>{
        if(!error) res.send('<h1>Add Successfully..</h1>')
    })
}
const User = require('../models/User');

const userList = (req, res) => {
    User.find()
        .exec()
        .then((users) => {
            if(users){
                return res.status(200)
                    .json({ data: users });
            }else{
                return res.status(404)
                .json({ message: "users not found!" });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
     });
}

const userReadOne = (req, res) => {
    const userId = req.param.id;
    User.findById(userId)
    .exec()
    .then((user) => {
        if (user) {
            res.status(200)
                .json({ data: user });
        } else {
            return res.status(404)
                .json({ message: "user not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err })
    });
}


const userCreate = (req, res) => {
        User.create({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            phone: req.body.phoneNumber,
            account: req.body.accountType,
            password: req.body.password

        })
        .then(( user ) =>{
            return res.status(201)
            .json({ data: user });
        })
        .catch( err => {
            console.log(`Error creating user: ${ err.message }`)
    });
}

const userUpdate = ( req, res ) =>{
    const userid = req.param.id;
    if ( !userid ) {
        return res.status(404)
            .json({ message: "user not found!" })
    }
    user.findByIdAndUpdate({ userid , 
        $set :{
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            phone: req.body.phoneNumber,
            account: req.body.accountType,
            password: req.body.password
        }
    })
    .then(( user ) => {
        return res.status(200)
            .json({ 
                message: "Updated successfully!",
                data: user
             });
    })
    .catch((err) =>{
        res.status(400).json({ error: err });
    });
}
 
const userDelete = (req, res, next) =>{
    const userId = req.param.id;
    if ( !userId ) {
        return res.status(404)
            .json({ message: "user not found!" })
    }
    user.findByIdAndRemove(userId)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the user" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    userList,
    userReadOne,
    userCreate,
    userUpdate,
    userDelete
}

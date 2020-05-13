const Investee = require('../models/investee');

const investList = (req, res) => {
    Investee.find()
        .populate('user')
        .exec()
        .then((investees) => {
            if(investees){
                return res.status(200)
                    .json(investees)
            }else{
                return res.status(404)
                .json({ message: "Investees not found!" })
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
     });
}

const investReadOne = (req, res) => {
    const investid = req.param.id;
    Investee.findById(investid)
    .populate('user')
    .exec()
    .then((investee) => {
        if (investee) {
            res.status(200)
                .json({
                    investee});
        } else {
            return res.status(404)
                .json({ message: "Investee not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err })
    });
}


const investeeCreate = (req, res) => {
        Investee.create({
            user : user._id,
            company : req.body.companyName,
            address : req.body.Adress
        })
        .then(( invest ) =>{
            return res.status(201)
            .json(invest);
        })
        .catch( err => {
            console.log(`Error creating investee: ${ err.message }`)
    });
}

const investeeUpdate = ( req, res ) =>{
    const investid = req.param.id;
    if ( !investid ) {
        return res.status(404)
            .json({ message: "Investee not found!" })
    }
    Investee.findByIdAndUpdate({ investid , 
        $set :{
            phone : req.body.mobilePhone,
            company : req.body.companyName,
            address : req.body.Adress
        }
    })
    .then(( invest ) => {
        return res.status(200)
            .json({ invest });
    })
    .catch((err) =>{
        console.log(`Error updating investee: ${ err.message }`);
    });
}
 
const investDelete = (req, res, next) =>{
    const investid = req.param.id;
    if ( !investid ) {
        return res.status(404)
            .json({ message: "Investee not found!" })
    }
    Investee.findByIdAndRemove(investid)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the investee" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    investList,
    investReadOne,
    investeeCreate,
    investeeUpdate,
    investDelete
}


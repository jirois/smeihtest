const Business = require('../models/investee');

const businessList = (req, res) => {
    Business.find()
        .populate("investId")
        .exec()
        .then((businesses) => {
            if(businesses){
                return res.status(200)
                    .json(businesses)   
            }else{
                return res.status(404)
                .json({ message: "businesss not found!" })
                
            }
        })
        .catch((err) => {
            res.status(500).json({ error : err })
        })
}

const businessReadOne = (req, res) => {
    const businessid = req.param.id;
    business.findById(businessid)
    .populate("investId")
    .exec()
    .then((business) => {
        if (business) {
            return res.status(200)
                .json(business);
        } else {
            return res.status(404)
                .json({ message: "business not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    })
}


const businessCreate = (req, res) => {
        business.create({
            investid : investeeId._id,
            businessTitle : req.body.businessTitle,
            description : req.body.businessDescription,
            category : req.body.businessCategory,
            location : req.body.preferredLocation,
            amount : req.body.requiredAmount,
            media : req.body.mediaURLs.split(" "),
            video : req.body.videoURL,
            status : req.body.status,
            goal : req.body.goal,
            deadline : req.body.deadline,
            validated : req.body.validated
        })
        .then(( business ) =>{
            return res.status(201)
            .json({
                message: "Created successfully",
                data : business 
            });
        })
        .catch( err => {
            console.log(`Error creating business: ${ err.message }`)
    })
}

const businessUpdate = ( req, res ) =>{
    const businessid = req.param.id;
    if ( !businessid ){
        return res.status(404)
            .json({ message: "Business not found!" })
    }
    business.findByIdAndUpdate({ businessid , 
        $set :{
            businessTitle : req.body.businessTitle,
            description : req.body.businessDescription,
            category : req.body.businessCategory,
            location : req.body.preferredLocation,
            amount : req.body.requiredAmount,
            media : req.body.mediaURLs.split(" "),
            video : req.body.videoURL,
            status : req.body.status,
            goal : req.body.goal,
            deadline : req.body.deadline,
            validated : req.body.validated
        }
    })
    .then(( business ) => {
        return res.status(200)
            .json({ 
                message: "Update successfully",
                data : business
             });
    })
    .catch((err) =>{
        console.log(`Error updating business: ${ err.message }`);
    })
}
 
const businessDelete= (req, res, next) =>{
    const businessid = req.param.id;
    business.findByIdAndRemove(businessid)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the business" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    })
}



module.exports = {
    businessList,
    businessReadOne,
    businessCreate,
    businessUpdate,
    businessDelete
}

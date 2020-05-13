const AuditTrail = require('../models/auditTrail');

const milestoneList = (req, res) => {
    Milestone.find()
        .populate('businessID')
        .exec()
        .then((milestones) => {
            if(milestones){
                return res.status(200)
                    .json(milestones)
            }else{
                return res.status(404)
                .json({ message: "milestones not found!" })
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
     });
}

const milestoneReadOne = (req, res) => {
    const milestoneId = req.param.id;
    milestone.findById(milestoneId)
    .populate('businessID')
    .exec()
    .then((milestone) => {
        if (milestone) {
            res.status(200)
                .json({
                    milestone});
        } else {
            return res.status(404)
                .json({ message: "milestone not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err })
    });
}


const milestoneCreate = (req, res) => {
        milestone.create({
            businessid: businessID._id,
            milestone: req.body.milestone,
            description: req.body.description,
            expectedTime: req.body.expectedTimeline,
            milestoneAmount: req.body.milestoneAmount
        })
        .then(( invest ) =>{
            return res.status(201)
            .json(invest);
        })
        .catch( err => {
            console.log(`Error creating milestone: ${ err.message }`)
    });
}

const milestoneUpdate = ( req, res ) =>{
    const milestoneid = req.param.id;
    if ( !milestoneid ) {
        return res.status(404)
            .json({ message: "milestone not found!" })
    }
    milestone.findByIdAndUpdate({ milestoneid , 
        $set :{
            milestone: req.body.milestone,
            description: req.body.description,
            expectedTime: req.body.expectedTimeline,
            milestoneAmount: req.body.milestoneAmount
        }
    })
    .then(( milestone ) => {
        return res.status(200)
            .json({ 
                message: "Updated successfully!",
                data: milestone
             });
    })
    .catch((err) =>{
        res.status(400).json({ error: err });
    });
}
 
const milestoneDelete = (req, res, next) =>{
    const milestoneId = req.param.id;
    if ( !milestoneId ) {
        return res.status(404)
            .json({ message: "milestone not found!" })
    }
    milestone.findByIdAndRemove(milestoneId)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the auditTrail" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    milestoneList,
    milestoneCreate,
    milestoneReadOne,
    milestoneUpdate,
    milestoneDelete
    
}

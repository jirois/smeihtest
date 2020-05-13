const AuditTrail = require('../models/auditTrail');

const milestoneValidationList = (req, res) => {
    MilestoneValidation.find()
        .populate('validator')
        .populate('milestoneReport')
        .exec()
        .then((milestoneValidations) => {
            if(milestoneValidations){
                return res.status(200)
                    .json(milestoneValidations)
            }else{
                return res.status(404)
                .json({ message: "milestoneValidations not found!" })
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
     });
}

const milestoneReadOne = (req, res) => {
    const milestoneValidationId = req.param.id;
    MilestoneValidation.findById(milestoneValidationId)
    .populate('validator')
    .populate('milestoneReport')
    .exec()
    .then((milestoneValidation) => {
        if (milestoneValidation) {
            res.status(200)
                .json({
                    milestoneValidation});
        } else {
            return res.status(404)
                .json({ message: "milestoneValidation not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err })
    });
}


const milestoneValidationCreate = (req, res) => {
        MilestoneValidation.create({
            userid: validator._id,
            milestonereportid: milestoneReport._id,
            remark: req.body.remark,
            verdict: req.body.verdict
        })
        .then(( validation ) =>{
            return res.status(201)
            .json({ data: validation });
        })
        .catch( err => {
            console.log(`Error creating milestoneValidation: ${ err.message }`)
    });
}

const milestoneValidationUpdate = ( req, res ) =>{
    const milestoneValidationid = req.param.id;
    if ( !milestoneValidationid ) {
        return res.status(404)
            .json({ message: "milestoneValidation not found!" })
    }
    MilestoneValidation.findByIdAndUpdate({ milestoneValidationid , 
        $set :{
            remark: req.body.remark,
            verdict: req.body.verdict
        }
    })
    .then(( milestoneValidation ) => {
        return res.status(200)
            .json({ 
                message: "Updated successfully!",
                data: milestoneValidation
             });
    })
    .catch((err) =>{
        res.status(400).json({ error: err });
    });
}
 
const milestoneValidationDelete = (req, res, next) =>{
    const milestoneValidationId = req.param.id;
    if ( !milestoneValidationId ) {
        return res.status(404)
            .json({ message: "milestoneValidation not found!" })
    }
    MilestoneValidation.findByIdAndRemove(milestoneValidationId)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the milestoneValidation" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    milestoneValidationList,
    milestoneReadOne,
    milestoneValidationCreate,
    milestoneValidationUpdate,
    milestoneValidationDelete
}

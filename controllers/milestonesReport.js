const MilestoneReport = require('../models/milestonesReport');

const milestoneReportList = (req, res) => {
    MilestoneReport.find()
        .populate('milestoneID')
        .exec()
        .then((milestoneReports) => {
            if(milestoneReports){
                return res.status(200)
                    .json(milestoneReports)
            }else{
                return res.status(404)
                .json({ message: "milestoneReports not found!" })
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
     });
}

const milestoneReportReadOne = (req, res) => {
    const milestoneReportId = req.param.id;
    MilestoneReport.findById(milestoneReportId)
    .populate('milestoneID')
    .exec()
    .then((milestoneReport) => {
        if (milestoneReport) {
            res.status(200)
                .json({
                    milestoneReport});
        } else {
            return res.status(404)
                .json({ message: "milestoneReport not found! "});
        }
    })
    .catch((err) => {
        res.status(500).json({ error: err })
    });
}


const milestoneReportCreate = (req, res) => {
        MilestoneReport.create({
            milestone: milestoneID._id,
            prof: req.body.prof
        })
        .then(( invest ) =>{
            return res.status(201)
            .json(invest);
        })
        .catch( err => {
            console.log(`Error creating milestoneReport: ${ err.message }`)
    });
}

const milestoneReportUpdate = ( req, res ) =>{
    const milestoneReportid = req.param.id;
    if ( !milestoneReportid ) {
        return res.status(404)
            .json({ message: "milestoneReport not found!" })
    }
    MilestoneReport.findByIdAndUpdate({ milestoneReportid , 
        $set :{
            proof: req.body.proof
        }
    })
    .then(( milestoneReport ) => {
        return res.status(200)
            .json({ 
                message: "Updated successfully!",
                data: milestoneReport
             });
    })
    .catch((err) =>{
        res.status(400).json({ error: err });
    });
}
 
const milestoneReportDelete = (req, res, next) =>{
    const milestoneReportId = req.param.id;
    if ( !milestoneReportId ) {
        return res.status(404)
            .json({ message: "milestoneReport not found!" })
    }
    MilestoneReport.findByIdAndRemove(milestoneReportId)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the milestoneReport" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    milestoneReportList,
    milestoneReportReadOne,
    milestoneReportCreate,
    milestoneReportUpdate,
    milestoneReportDelete
}

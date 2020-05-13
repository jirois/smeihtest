const Setting = require('../models/settings');


const settingCreate = (req, res) => {
        Setting.create({
            user: user._id,
            optionKey: req.body.optionKey,
            value: req.body.value
        })
        .then(( setting ) =>{
            return res.status(201)
            .json({
                message: "Successfully created!",
                data: setting
            });
        })
        .catch( err => {
            console.log(`Error creating setting: ${ err.message }`)
    });
}

const settingUpdate = ( req, res ) =>{
    const settingid = req.param.id;
    if ( !settingid ) {
        return res.status(404)
            .json({ message: "setting not found!" })
    }
    Setting.findByIdAndUpdate({ settingid , 
        $set :{
            optionKey: req.body.optionKey,
            value: req.body.value
        }
    })
    .then(( setting ) => {
        return res.status(200)
            .json({ 
                message: "Updated successfully!",
                data: setting
             });
    })
    .catch((err) =>{
        res.status(400).json({ error: err });
    });
}
 
const settingDelete = (req, res, next) =>{
    const settingId = req.param.id;
    if ( !settingId ) {
        return res.status(404)
            .json({ message: "setting not found!" })
    }
    Setting.findByIdAndRemove(settingId)
    .then(() =>{
        res.status(200).json({ message: "successfully deleted the setting" })
        next()
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    settingCreate,
    settingUpdate,
    settingDelete
}

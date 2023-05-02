const Urls = require('../model/schema');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom_error')

const getAllUrls = asyncWrapper (async (req, res) => {
    const urls = await Urls.find({});
    res.status(200).json({urls})
})

const getUrl = asyncWrapper (async (req, res, next) => {
    const {id: urlID} = req.params;
    const url = await Urls.findOne({_id: urlID});

    if (!url){
        return next(createCustomError(`No task with id: ${urlID}`, 404))
    }
    res.status(200).json({url})  
})

const createUrl = asyncWrapper (async (req, res) => {
    const url = await Urls.create(req.body);
    res.status(201).json({url})
})

const updateUrl = asyncWrapper (async (req, res, next) => {
    const {id: urlID} = req.params;
    const url = await Urls.findByIdAndUpdate({_id: urlID}, req.body, {new: true, runValidators: true});

    if (!url){
        return next(createCustomError(`No task with id: ${urlID}`, 404))
    }
        
    res.status(200).json({url})
})

const deleteUrl = asyncWrapper (async (req, res, next) => {
    const {id: urlID} = req.params;
    const url = await Urls.findOneAndDelete({_id: urlID});
    if (!url){
        return next(createCustomError(`No task with id: ${urlID}`, 404))
    }
        
    res.status(200).json({url})
})

module.exports = {getAllUrls, getUrl, createUrl, updateUrl, deleteUrl}



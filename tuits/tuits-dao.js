import tuitsModel from './tuits-model.js';
const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});

const tuitsDao = {
    findAllTuits,
    createTuit,
    deleteTuit,
    updateTuit
};

export default tuitsDao;
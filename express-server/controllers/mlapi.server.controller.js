import mongoose from 'mongoose';

//import models
import Variable from '../models/variable.server.model';
import * as MlTrainer from './ml-trainer.controller.js';

export const testAccuracy = (req,res) => {

    MlTrainer.testClassifierAccuracy()
        .then(function(result) {
            return res.status(200).send(
                JSON.stringify({success:true, response: result})
            );
        });

};

export const predictType = (req,res) => {
    console.log(req.query);

    // let message = MlTrainer.predictWithClassifier();
    // console.log(message);

    return res.status(200).send(JSON.stringify({success:true, message:'yeeeha'}));
};



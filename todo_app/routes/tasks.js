const Task = require('../models/tasks');
const express = require('express');
const router = express.Router();

router.post("/", async (req,res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    }
    catch (e) {
        res.send(e)
    }
});

router.get("/", async (req,res) => {
    try {
        const tasks = await Task.find({"isActive":true});
        res.send(tasks)
    }
    catch (e) {
        res.send(e);
    }
});

router.put("/:id", async (req,res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {
             _id: req.params.id},
            req.body
        );
        res.send(task)
    }
    catch (e) {
        res.send(e)
    }

});

router.delete("/:id", async  (req,res) => {
    try {
        const task = await Task.findByIdAndDelete({
             _id: req.params.id},
            req.body
        );
        res.send(task);
        // const task = await Task.findOne(
        //     {
        //      _id: req.params.id},
        //     req.body
        // );
        // res.send(task)
    }
    catch (e) {
        res.send(e)
    }
});

module.exports = router;

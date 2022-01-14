const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology : true

        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to DB")
    }
    catch (e) {
        console.log("Error Connecting DB",e)
    }
};

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
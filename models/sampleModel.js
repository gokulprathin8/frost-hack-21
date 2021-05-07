const mongoose = request('mongoose');

const sampleModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is a required field']
    },
    descriptiom: {
        type: String,
        required: false
    }
}, {timestamps: true});

const sampleModel = mongoose.model('SampleModelSchema', sampleModelSchema);

module.exports = sampleModel;
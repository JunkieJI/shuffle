import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const seriesSchema = new Schema({
  _id: Number,
  title: {
    type: String,
    required: true
  },
  description: String,
  thumbnail: String
});

export default mongoose.model('Series', seriesSchema);

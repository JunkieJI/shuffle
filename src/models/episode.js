import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const episodeSchema = new Schema({
  _id: Number,
  title: {
    type: String,
    required: true
  },
  description: String,
  season: {
    type: Number,
    required: true
  },
  episodeNumber: {
    type: Number,
    required: true
  },
  series: { // TODO: create series schema
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnail: String
});

export default mongoose.model('Episode', episodeSchema);
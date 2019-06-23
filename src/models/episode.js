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
  episode_number: {
    type: Number,
    required: true
  },
  series_id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnail: String
});

export default mongoose.model('Episode', episodeSchema);

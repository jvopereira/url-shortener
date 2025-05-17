import mongoose from "mongoose"

const slugSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
}, {
  timestamps: true
})

export default slugSchema
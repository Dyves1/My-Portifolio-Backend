import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   blog: {
//     type: Schema.Types.ObjectId,
//     ref: 'Blog',
//     required: true
//   },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;

const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
  },
  content: { 
    type: Object, 
    required: true, 
  },
  image: { 
    type: String, 
    default: '', 
  },
  date: { 
    type: Date, 
    default: Date.now, 
  },
  likecount: { 
    type: Number, 
    default: 0, 

}});


module.exports = mongoose.model('Blog', BlogSchema);

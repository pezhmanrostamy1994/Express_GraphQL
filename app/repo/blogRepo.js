const { blogModel } = require("../Model/blog.model");

const getAllBlogs = async (query = {}) => {
  return await blogModel.find(query);
};
module.exports ={
    getAllBlogs
}
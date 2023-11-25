const blogsService = require("../../services/blog.service");
const { blogsListTypes } = require("../typDefs/blog.type");

const BlogResolver = {
  type: blogsListTypes,
  resolve:  async () => { 
    const result = await blogsService.getAllBlogs()
    return result.data
  },
};

module.exports = {
  BlogResolver,
};

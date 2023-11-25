const blogRepo = require("../repo/blogRepo");

const getAllBlogs = async () => {
  const data = await blogRepo.getAllBlogs();
  return { data };
};

module.exports = {
  getAllBlogs,
};

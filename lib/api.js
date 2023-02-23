const axios = require("axios");

// 拦截全局请求响应
axios.interceptors.response.use(res => {
  return res.data;
});

/**
 * 获取模板
 *详细信息:https://api.github.com/repos/wosqqachen/仓库名
 * @returns Promise
 */
async function getCzwRepo() {
  return await axios.get("https://api.github.com/users/wosqqachen/repos");
}

/**
 * 获取仓库下tag的版本
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagsByRepo(repo) {
  return await axios.get(`https://api.github.com/repos/wosqqachen/${repo}/tags`);
}

module.exports = {
  getCzwRepo,
  getTagsByRepo
};

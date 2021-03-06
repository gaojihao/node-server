/**
 * 根据请求，转换为本地文件。根据安全策略，删除前后 /，移除连续 .
 * @param {*} url
 */
module.exports.getFile = function (url) {
    return decodeURIComponent(url)
        .replace(/^\/|\/$/g, '')
        .replace(/\/+/g, '/')
        .replace('/api', '')
        .replace(/\.+/g, '.');
};

/**
 * 文件类型
 * @param {*} url
 */
module.exports.getMime = function (url) {
    return url.replace(/.*\./, '').toLowerCase();
};

const success = (data) => {
  return JSON.stringify({
    data: data,
    code: 200,
    message: "success",
  });
};

const failCode = (code) => {
  return JSON.stringify({
    data: null,
    code: code,
    message: 'fail',
  });
};

const failMessgae = (message) => {
  return JSON.stringify({
    data: null,
    code: 12006,
    message: message,
  });
};



module.exports = {
    success: success,
    failCode: failCode,
    failMessgae:failMessgae
}
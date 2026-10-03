const successResponse = (res, message ,data=null ,status =201) => {

  res.status(status).json({
    status:true,
    message:message,
    errorType: null,
    data,
  });
}

const errorResponse = (res, message, errorType, status = 400) => {
  res.status(status).json({
    message: message,
    errorType: errorType,
    status: false,
    data: null,
  });
};

module.exports = { errorResponse,successResponse };

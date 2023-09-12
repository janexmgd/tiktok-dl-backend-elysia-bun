const response = {
  success: (code, etc) => {
    const { status, message, data } = etc;
    const response = {
      status: status || 'ok',
      message: message || 'running without error',
      data: data || '',
    };

    return JSON.stringify({
      code,
      response,
    });
  },
  failed: (code, etc) => {
    const { status, message } = etc;
    const response = {
      status: status || 'error',
      message: message || 'error',
    };

    return JSON.stringify({
      code,
      response,
    });
  },
};
export default response;

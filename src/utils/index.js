exports.webParam = (param, type) => {
  switch (type) {
    case 'int':
      return param ? parseInt(param) : undefined;
    case 'string':
      return param ? param.toString() : undefined;
    case 'float':
      return param ? parseFloat(param) : undefined;
    case 'bool':
      return param ? Boolean(param) : undefined;
    default:
      return undefined;
  }
};
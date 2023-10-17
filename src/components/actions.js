export const errorAction = (errorMessage) => {
  return {
    type: 'ERROR',
    error: errorMessage,
  };
};
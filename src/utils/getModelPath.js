export const getModelPath = (modelName) => {
    const isLocalhost = window?.location?.hostname === 'localhost';
    const basePath = isLocalhost ? '' : '/agents'; // Use empty string for localhost, '/agents' for production
    return `${basePath}/models/${modelName}`;
  };
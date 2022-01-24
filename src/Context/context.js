import React, { createContext, useState } from 'react';

const LoaderContext = React.createContext({});

const LoaderProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const loaderContextValue = {
    loading,
    setLoading,
  };

  return <LoaderContext.Provider value={loaderContextValue} {...props} />;
};

const useLoader = () => React.useContext(LoaderContext);

export { LoaderProvider, useLoader };

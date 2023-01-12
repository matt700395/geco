import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';


function ScrollToTopRoute(props)  {
  // window.scrollTo(0, 0)
  // const { ...rest } = props;
  // return <Route {...rest}/>;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { ...rest } = props;

  return <Route  {...rest} />



}

export default ScrollToTopRoute;

import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (
      !window.location.href.includes('localhost') &&
      process.env.REACT_APP_MEASUREMENT_ID
    ) {
      ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({
        hitType: 'pageview',
        page: 'images-viewer',
      });
    }
  }, [initialized]);
};

export default usePageTracking;

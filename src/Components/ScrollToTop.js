import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import './styles.css'; // Import the CSS file where your .hidden class is defined
import AnimatedSection from './AnimatedSection'; // Make sure the path is correct

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.classList.add('hidden');
    setIsLoaded(false);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.classList.remove('hidden');
      setIsLoaded(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoaded ? <AnimatedSection>{children}</AnimatedSection> : null;
};

export default ScrollToTop;

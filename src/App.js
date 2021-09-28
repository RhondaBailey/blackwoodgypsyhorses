import './App.css';
import { useMediaQuery } from 'react-responsive';
import 'semantic-ui-css/semantic.min.css'


import { NavBar } from './mobile';
import { Desktop } from './desktop';


function App() {
  const isMobileDevice = useMediaQuery({ query: "(max-width: 991px)",});
  //const isDesktop = useMediaQuery({ query: "(min-device-width: 992px)",});
  
  return (
      <>
      {isMobileDevice ? <NavBar /> : <Desktop />}
      
      </>
  );
}

export default App;

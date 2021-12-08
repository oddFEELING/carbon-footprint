import '../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/bundle';
import useScreen from '../hooks/useScreen';

function MyApp({ Component, pageProps }) {
  const screen = useScreen();
  return (
    <>
      {screen ? (
        <div className='error__div'>
          <h1 className='error__header'>CARBON FOOTPRINT TRACKER</h1>
          <h1 className='error__tag one'>
            No support for small screens at the moment
          </h1>
          <h2 className='error__tag two'>Please increase screen size</h2>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { store } from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer
          className="impct-toast"
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover
        />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp

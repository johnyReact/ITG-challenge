import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store'; // update this path according to your file structure
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
        <ToastContainer
          position={'top-right'}
          style={{ top: '55px' }}
          autoClose={3000}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          transition={Slide}
          limit={4}
          // icon={false}
          closeButton={false}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;

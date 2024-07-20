import './App.css';
import { GlobalContext } from './context';
import { router } from './routers';
import { RouterProvider } from 'react-router-dom';

function App() {
  const username = 'Muh. Iqram bahring';
  return (
    <div className="App">
      <GlobalContext.Provider value={{ username }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

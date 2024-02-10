import { BrowserRouter, Route} from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout';

function App() {
  return (    
    <Layout>
      <BrowserRouter>
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </BrowserRouter>
    </Layout>      
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { Dashboard } from './Pages/Dashboard/Dashboard';

function App() {
  return (
   
   <Suspense >
    <Dashboard />
   </Suspense>
  );
}

export default App;

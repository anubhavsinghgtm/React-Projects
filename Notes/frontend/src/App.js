
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,

} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='container dark'>
        <div className="app">
          <Header />
            <Routes>
              <Route path="/"  exact element={ <NotesListPage />} />
              <Route path="/note/:id"  element={ <NotePage />} />
              
              {/* <Route path="/test"  */}
            </Routes>
        </div>
      </div>
     
    </Router>
  );
}

export default App;

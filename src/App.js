import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Airlines from './components/airlines/Airlines'
import Details from './components/airlines/details/Details'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {

  

  return (
    <div className="App">
      <Router>
        <Header />

          <Routes>
            <Route path="/" element={<Airlines />}>
              {/* <Route index element={<Airlines />} /> */}
              
            </Route>
              <Route path="/details/:id" element={<Details />} />
              {/* <Route path="/users/:userId" element={<Users />} /> */}
          </Routes> 
      
        <Footer />
    </Router>
    </div>
  );
}

export default App;

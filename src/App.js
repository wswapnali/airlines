import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Airlines from './components/airlines/Airlines'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {

  

  return (
    <div className="App">
        <Header />
        <Airlines /> 
        <Footer />
    </div>
  );
}

export default App;

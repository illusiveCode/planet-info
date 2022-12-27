import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        
        <Container>
          <Home/>
        </Container>
      </div>
     
    </div>
  );
}

export default App;

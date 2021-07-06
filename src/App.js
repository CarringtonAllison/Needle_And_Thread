import { React } from 'react' 
import { Header, Home, Pattern, Blog, Contact } from './components/common'

function App() {
  return (
    <div className="App">
        <Header />
        <Pattern /> 
        <Blog /> 
        <Contact /> 
      </div>
  );
}

export default App;

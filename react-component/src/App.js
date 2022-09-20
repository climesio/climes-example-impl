import logo from './logo.svg';
import './App.css';
import WidgetComponent from './WidgetComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <WidgetComponent truecostValue={10} onOptInChange={(e) => console.log(e.target)} />
      </header>
    </div>
  );
}

export default App;

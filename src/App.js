import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Upload from './pages/upload/Upload'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>

  );
}

export default App;

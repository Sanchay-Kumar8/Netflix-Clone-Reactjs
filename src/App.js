import './App.css';
import Nav from './components/Nav/nav';
import Header from './components/Header/Header';
import Content from './components/content/Content'
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key : 'd7e78b919063842ef4a0a78ae62a424d'
};


const App = () => {

  return <div>
    <Nav/>
    <Header/>
    <Content/>
  </div>

};

export default App;
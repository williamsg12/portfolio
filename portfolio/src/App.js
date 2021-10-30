import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { Route, Router } from 'react-router';
import Resume from './Components/Resume';

function App() {
  return (
		<div className='App'>
			<Home />

			<Route path='/aboutme' component={AboutMe} />
			<Route path='/contact' component={Contact} />
			<Route path='/projects' component={Projects} />
			<Route path='/resume' component={Resume} />
		</div>
	);
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import UserCard from './components/UserCard';
import Greeting from './components/Greeting';
import StatusBadge from './components/StatusBadge';
import Product from './components/Product';
import Card from './components/Card';
import BlogPost from './components/BlogPost';
import MovieList from './components/MovieList';
import ToggleButton from './components/ToggleButton';
import Header from "./components/header/Header"; 
import About from "./components/About/About";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowcase"; 
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import './App.css';

const movies = [
  { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
  { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
  { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
  { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
];

const skills = ["React", "JavaScript", "HTML", "CSS"];

const projects = [
  {
    name: "React Lab",
    description: "My first React project",
    technologies: ["React", "Vite", "CSS"]
  },
  {
    name: "Portfolio",
    description: "Personal portfolio site",
    technologies: ["React", "HTML", "CSS"]
  },
  {
    name: "Todo App",
    description: "Simple todo list app",
    technologies: ["React", "JavaScript"]
  }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <StatusBadge />

      <UserCard name="Alice" email="alice@example.com" role="Developer" />
      <UserCard name="Bob" email="bob@example.com" role="Designer" />
      <UserCard name="Charlie" email="charlie@example.com" role="Manager" />

      <Product title="Laptop" price={999} inStock={true} rating={2} />
      <Product title="Phone" price={499} inStock={false} rating={4} />
      <Product title="Headphones" price={99} inStock={true} rating={5} />

      <div>
        <BlogPost
          title="Learning React"
          author={{ name: "Alice", email: "alice@example.com", role: "Developer" }}
          content="This is a blog post about learning React. React is awesome!"
          date="Jan 15"
        />
        <BlogPost
          title="React Tips"
          author={{ name: "Bob", email: "bob@example.com", role: "Designer" }}
          content="Here are some tips to improve your React skills."
          date="Jan 20"
        />
      </div>

      <div>
        <Card title="Card 1">
          <p>This is the content inside Card 1</p>
        </Card>
        <Card title="Card 2">
          <p>This is the content inside Card 2</p>
        </Card>
      </div>

      <div>
        <MovieList movies={movies} />
      </div>

      <div>
        <ToggleButton />
      </div>

      <div>
        <Header title="Ameni Gharbi" tagline="Learning React and building projects!" />
        <About
          profileImage="https://via.placeholder.com/150"
          bio="Hi! I am a React developer learning new skills every day."
          skills={skills}
        />
        <ProjectShowcase projects={projects} />
        <Contact
          email="amenigharbi@example.com"
          github="https://github.com/amenigharbi20"
          linkedin="https://linkedin.com/in/amenigharbi20"
        />
        <Footer name="Ameni Gharbi" />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

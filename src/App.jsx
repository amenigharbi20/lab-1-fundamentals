import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import StatusBadge from "./components/StatusBadge/StatusBadge";
import UserCard from "./components/UserCard/UserCard";
import Product from "./components/Product/Product";
import Card from "./components/Card/Card";
import BlogPost from "./components/BlogPost/BlogPost";
import MovieList from "./components/MovieList/MovieList";
import ToggleButton from "./components/ToggleButton/ToggleButton";

const movies = [
  { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
  { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
  { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
  { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
];

function App() {
  return (
    <div className="app">
      {/* Exercise 1.1 - Greeting */}
      <Greeting />


      {/* Exercise 1.3 - Status Badge */}
      <section className="section">
        <h2 className="section-title">Status Badges</h2>
        <div className="flex-container">
          <StatusBadge />
        </div>
      </section>

      {/* Exercise 2.1 - User Cards */}
      <section className="section">
        <h2 className="section-title">Our Team</h2>
        <div className="flex-container">
          <UserCard name="Alice" email="alice@example.com" role="Developer" />
          <UserCard name="Bob" email="bob@example.com" role="Designer" />
          <UserCard name="Charlie" email="charlie@example.com" role="Manager" />
        </div>
      </section>

      {/* Exercise 2.2 - Products */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="flex-container">
          <Product title="Laptop" price={999} inStock={true} rating={4.5} />
          <Product title="Phone" price={499} inStock={false} rating={4} />
          <Product title="Headphones" price={99} inStock={true} rating={5} />
        </div>
      </section>

      {/* Exercise 2.3 - Cards */}
      <section className="section">
        <h2 className="section-title">Information Cards</h2>
        <Card title="What is React?">
          <p>React is a JavaScript library for building user interfaces, created by Facebook.</p>
        </Card>
        <Card title="Why Use React?">
          <p>React makes it easy to create interactive UIs with reusable components and efficient rendering.</p>
        </Card>
        <Card title="React Features">
          <p>Component-based architecture, Virtual DOM, JSX syntax, and a huge ecosystem of tools.</p>
        </Card>
      </section>

      {/* Exercise 3.1 - Blog Posts */}
      <section className="section">
        <h2 className="section-title">Latest Blog Posts</h2>
        <BlogPost 
          title="Learning React"
          author={{ name: "Alice", email: "alice@example.com", role: "Developer" }}
          content="React is an amazing library for building user interfaces. It's component-based and makes building complex UIs much easier. The declarative nature of React makes it simple to create interactive UIs."
          date="Jan 15, 2026"
        />
        <BlogPost 
          title="React Tips & Tricks"
          author={{ name: "Bob", email: "bob@example.com", role: "Designer" }}
          content="Here are some tips for working with React: always use keys in lists, keep components small and focused, don't forget to handle edge cases, and leverage React DevTools for debugging."
          date="Jan 20, 2026"
        />
      </section>

      {/* Exercise 3.2 - Movie List */}
      <MovieList movies={movies} />

      {/* Exercise 3.3 - Toggle Button */}
      <section className="section">
        <h2 className="section-title">Toggle Component Preview</h2>
        <ToggleButton />
      </section>
    </div>
  );
}

export default App;
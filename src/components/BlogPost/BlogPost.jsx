import "./BlogPost.css";
import UserCard from "../UserCard/UserCard";

function BlogPost({ title, author, content, date }) {
  return (
    <article className="blog-post">
      <h1 className="blog-title">{title}</h1>
      
      <div className="blog-author">
        <UserCard 
          name={author.name} 
          email={author.email} 
          role={author.role} 
        />
      </div>
      
      <div className="blog-content">
        <p>{content}</p>
      </div>
      
      <footer className="blog-footer">
        <p>📅 Published on: {date}</p>
      </footer>
    </article>
  );
}

export default BlogPost;
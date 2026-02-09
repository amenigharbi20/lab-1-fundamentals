import './BlogPost.css'

export default function BlogPost({ title, author, content, date }) {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <p>By: {author.name}</p>
      <p className="post-content">{content}</p>
      <p className="post-date">Published on: {date}</p>
    </div>
  )
}

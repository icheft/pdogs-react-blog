// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
            {/* <button className="info">Add Post</button> */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <div className="title">{blog.title}</div>
                        <p>
                            Written by{' '}
                            <span className="author">{blog.author}</span> @{' '}
                            {blog.date}
                        </p>
                        <p>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                {blog.body.slice(0, 200) + '...'}
                            </ReactMarkdown>
                        </p>
                    </Link>

                    {/* <p>{blog.body}</p> */}
                </div>
            ))}
        </div>
    );
};

export default BlogList;

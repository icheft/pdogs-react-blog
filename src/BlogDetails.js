import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
    const { id } = useParams();
    const {
        data: blog,
        error,
        isPending,
    } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>
                        Written by <span className="author">{blog.author}</span>{' '}
                        @ {blog.date}
                    </p>
                    <div>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {blog.body}
                        </ReactMarkdown>
                    </div>
                </article>
            )}

            <button className="danger" onClick={handleDelete}>
                delete blog
            </button>
            <button className="edit">edit blog</button>
        </div>
    );
};

export default BlogDetails;

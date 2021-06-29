import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from 'react';
import CommentSection from './Comment/CommentSection';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import firebase from './Comment/base';

const BlogDetails = () => {
    const { id } = useParams();
    const {
        data: blog,
        error,
        isPending,
    } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleEdit = () => {
        history.push('/edit/' + blog.id);
    };

    const handleDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-alert">
                        <h1>Are you sure?</h1>
                        <p>You want to delete this post?</p>
                        <button onClick={onClose} className="info">
                            No
                        </button>
                        <button
                            className="danger"
                            onClick={() => {
                                fetch(
                                    'http://localhost:8000/blogs/' + blog.id,
                                    {
                                        method: 'DELETE',
                                    }
                                ).then(() => {
                                    history.push('/');
                                });
                                onClose();
                            }}
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                );
            },
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                    <article>
                        <button className="danger" onClick={handleDelete}>
                            delete blog
                        </button>
                        <button className="edit" onClick={handleEdit}>
                            edit blog
                        </button>
                        <br></br>
                        <br></br>

                        <h1>{blog.title}</h1>
                        <p>
                            Written by{' '}
                            <span className="author">{blog.author}</span> @{' '}
                            {blog.date}
                        </p>
                        <div>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                {blog.body}
                            </ReactMarkdown>
                        </div>
                    </article>
                    <CommentSection blog={blog} db={firebase} />
                </div>
            )}
        </div>
    );
};

export default BlogDetails;

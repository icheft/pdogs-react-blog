import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import AutoTextArea from './AutoTextArea';

const Edit = () => {
    const { id } = useParams();
    const {
        data: blog,
        error,
        isPending,
    } = useFetch('http://localhost:8000/blogs/' + id);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [wait, setWait] = useState(false);

    useEffect(() => {
        if (!isPending) {
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
            setDate(blog.date);
        }
    }, [isPending]);

    const handleDate = (e) => {
        const d = new Date().toLocaleDateString('en-CA');
        setDate(d);
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page from being refreshed
        const blog = { title, body, author, date, id };

        setWait(true);
        console.log(blog);

        fetch(`http://localhost:8000/blogs/${id}`, {
            // define method
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog), // json server will add the id itself
        }).then(() => {
            setWait(false);
            console.log('Post edited!');
            // history.go(-1); // go back one page
            history.go(-1); // go back one page
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="create">
                    <h2>Edit "{title}"</h2>
                    <br></br>
                    <form onSubmit={handleSubmit}>
                        <label>🙌🏾 Post Title:</label>
                        <input
                            type="text"
                            required
                            placeholder="Your post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>📝 Post Body:</label>
                        <textarea
                            required
                            placeholder="Your post body goes here. Express as much as you want."
                            value={body}
                            rows="20"
                            onChange={(e) => {
                                setBody(e.target.value);
                                AutoTextArea(e);
                            }}
                        />
                        <label>🙋🏾‍♂️ Post Author:</label>
                        <input
                            type="text"
                            required
                            placeholder="What should we call you?"
                            value={author}
                            disabled
                        ></input>
                        <br></br>
                        {!wait && (
                            <button onClick={handleDate}>Confirm Edit</button>
                        )}
                        {wait && <button disabled>Editing post...</button>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default Edit;

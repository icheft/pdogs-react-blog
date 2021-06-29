import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AutoTextArea from './AutoTextArea';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [date, setDate] = useState('');

    const history = useHistory();
    const handleDate = (e) => {
        const d = new Date().toLocaleDateString('en-CA');
        setDate(d);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page from being refreshed
        const blog = { title, body, author, date };

        setIsPending(true);
        console.log(blog);

        fetch('http://localhost:8000/blogs', {
            // define method
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog), // json server will add the id itself
        }).then(() => {
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('');
            console.log('new post added');
            // history.go(-1); // go back one page
            history.push('/'); // go back one page
        });
    };

    return (
        <div className="create">
            <h2>Add a new post</h2>
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
                    onChange={(e) => setAuthor(e.target.value)}
                ></input>
                <br></br>
                {!isPending && <button onClick={handleDate}>Add post</button>}
                {isPending && <button disabled>Add post...</button>}
            </form>
        </div>
    );
};

export default Create;

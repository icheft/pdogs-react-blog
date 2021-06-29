import { useEffect, useState } from 'react';

const CommentBox = ({ blog, db }) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page from being refreshed
        let dbCon = db.database().ref('/messages');
        var keyRef = dbCon.push({
            name: name,
            message: message,
            time: new Date().toLocaleString('en-CA', {
                timeZone: 'Asia/Taipei',
            }),
        });
        console.log(keyRef.key);
        setName('');
        setMessage('');
    };

    return (
        <div className="card-form">
            <form onSubmit={handleSubmit}>
                <label className="label">Name</label>
                <input
                    placeholder="What should we call you?"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                ></input>
                <label className="label">Message</label>
                <textarea
                    placeholder="What do you want to say?"
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    rows="5"
                    cols="20"
                    value={message}
                ></textarea>

                <button>Leave Comment</button>
            </form>
        </div>
    );
};

export default CommentBox;

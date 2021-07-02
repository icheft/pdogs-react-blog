import { useEffect, useState } from 'react';
import _ from 'lodash';

const CommentList = ({ db }) => {
    const [messages, setMessages] = useState([]);

    // app.on('value', snapshot=> {

    // })
    const getData = (values) => {
        var messagesVal = values;
        var messages = _(messagesVal)
            .keys()
            .map((messageKey) => {
                var cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();

        setMessages(messages);
    };

    useEffect(() => {
        const app = db.database().ref('messages');
        app.on('value', (snapshot) => {
            getData(snapshot.val());
        });
    }, [db]);

    const handleDelete = (key, e) => {
        let dbCon = db.database().ref('/messages');
        dbCon.child(key).remove();
    };

    return (
        <div>
            {messages.map((message) => (
                <div className="comment">
                    <div className="comment-user">
                        <span className="user-details">
                            <span className="username">{message.name} </span>
                            <span>on </span>
                            <span>{message.time}</span>
                        </span>
                    </div>
                    <div className="comment-text">{message.message}</div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;

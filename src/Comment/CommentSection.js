import CommentList from './CommentList';
import CommentBox from './CommentBox';

const CommentSection = ({ blog, db }) => {
    return (
        <div className="comments-section">
            <h4 className="comments">COMMENTS</h4>
            <div id="comments-container">
                <CommentList db={db} />
            </div>
            <div class="comment-editor">
                <h4>LEAVE A COMMENT</h4>
                <CommentBox db={db} />
            </div>
        </div>
    );
};

export default CommentSection;

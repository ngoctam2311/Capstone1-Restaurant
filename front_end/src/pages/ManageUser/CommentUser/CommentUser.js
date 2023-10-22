import "./commentUser.css";

const CommentUser = () => {
    return (
        <div className="review-user">
            <h2 className="comment-heading">Đánh giá của tôi</h2>
            <div className="wrapp-review">
                <p className="no-comment">Chưa có đánh giá nào</p>
            </div>
        </div>
    );
};

export default CommentUser;

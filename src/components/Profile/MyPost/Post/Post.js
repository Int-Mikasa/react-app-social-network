import s from "../MyPost.module.css";

const Post = (props) => {

    return (
        <div>
            <div className={s.item}>
                <p>
                    <span>{props.message}</span>
                </p>
            </div>
        </div>
    );
}

export default Post;
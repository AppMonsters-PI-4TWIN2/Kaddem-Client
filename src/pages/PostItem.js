import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/post.module.css';
import profilePicture from '../styles/blank-profile-picture.png';
import likeIcon from '../styles/likeIcon.png';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Post = ({
                post,
                user,
                handleCommentSubmit,
                setContent,
                setPostId,
                isLoading,
                error,
              }) => {
  const [comments, setComments] = useState({});
  const [displayComments, setDisplayComments] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchComment = async (postId) => {
    try {
      const response = await axios.get(`/post/getComments/${postId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setComments((prevComments) => ({
        ...prevComments,
        [post._id]: response.data,
      }));
    } catch (error) {
      console.log('Error fetching comments:', error);
    }
  };



  useEffect(() => {
    fetchComment(post._id);
  }, [post._id, user.token]);

  const likePost = async (postId) => {
    try {
      const response = await axios.post('/post/likePost', {token: user.token,
        id: postId }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
        },
    });
    toast.success('Post liked! Thank you for your support!');
  
      // Update the post data in the front-end after liking/unliking
      // const updatedPost = response.data;
      // const updatedPosts = posts.map((post) =>
      //   post._id === updatedPost._id ? updatedPost : post
      // );
      // setPosts(updatedPosts);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
      <div className="row">
        <div className="col-12 col-md-5 mx-auto shadow p-3 mb-5 bg-body rounded">

          <div key={post._id} >
            <div className={styles.postWrapper}>
              <div >
                <div >
                  {post.project.Image ? (
                      <img style={{width:"60px",height:"60px"}} className={styles.postProfileImg} src={post.project.Image.url} alt="" />
                  ) : (
                      <img style={{width:"60px",height:"60px"}} className={styles.postProfileImg} src={profilePicture} alt="" />
                  )}
                  <span className={styles.postUsername} style={{fontSize:"21px" ,color:"black"}}>{post.project.ProjectName}</span>
                </div>
                <div className={styles.postTopRight}>{/* <MoreVert />  */}</div>
              </div>
              <div className={styles.postCenter}>
                <span className={styles.postText}>{post.caption}</span>
                <img className={styles.postImage} src={post.image} alt="" />
              </div>
              <div className={styles.postBottom}>
                <div className={styles.postBottomLeft}>
                  <img className={styles.likeIcon} src={likeIcon} alt="" onClick={() => likePost(post._id)}/>
                    <span className={styles.postText}>{post.numberOfLikes} Likes</span>
                </div>
                <div className={styles.postBottomRight}>
            <span
                onClick={() => setDisplayComments((prevState) => !prevState)}
                className={styles.showCommentsText}
            >
              Show Comments
            </span>
                </div>
              </div>
            </div>
            <form
                onSubmit={handleCommentSubmit}
                className={`${styles.postTop} ${styles.commentForm}`}
            >
        <textarea
            className={styles.commentInput}
            rows="1"
            placeholder="Add a comment..."
            type="text"
            name="content"
            onChange={(e) => {
              setPostId(post._id), setContent(e.target.value);
            }}
        />
              <button type="submit" className={`${styles.commentButton} btn btn-outline-primary ms-6`}>
                Comment
              </button>
              {isLoading && <p>Loading...</p>}
              {error && <p>{error}</p>}
            </form>
            {displayComments &&
                (comments[post._id] || []).map((comment) => (
                    <div key={comment._id} className={styles.commentCard}>
                      <img
                          className={styles.commentProfileImg}
                          src={profilePicture}
                          alt=""
                      />
                      <div className={styles.commentInfoCard}>
                        <div className={styles.commentInfo}>
                          <span className={styles.commentUsername}>{comment.owner.userName}</span>
                          <span className={styles.commentContent}>{comment.content}</span>
                        </div>
                      </div>
                    </div>
                ))}
          </div>
        </div>
        <div>
  {/* Your other components */}
  <ToastContainer />
</div>
      </div>
  );
};

export default Post;
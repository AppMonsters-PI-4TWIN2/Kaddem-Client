import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../styles/post.module.css";
import styled from "../styles/feed.module.css";
//import { MoreVert } from "@material-ui/icons";
import profilePicture from '../styles/blank-profile-picture.png';
import likeIcon from "../styles/likeIcon.png";
import heartIcon from "../styles/heartIcon.png";

import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import Post from "./PostItem.js"

const Feed =(props) => {

    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    var user = JSON.parse( localStorage.getItem('user') );
    const owner = user._id;
    const userId = user.id;
    const namex = user.email;
    const [postId, setPostId] = useState('');
    const [content, setContent] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const [Projects, setProjects] = useState([]);
    // ----------------------------------------Show Projects----------------------------------------
    useEffect(()=>{
        const fetchData = async () => {

            const response = await axios.get(`/api/project/projects/${userId}`)
            setProjects(response.data)
            console.log(response.data);

        }

        fetchData();

    },[userId])
    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedProject(selectedValue);
    };
    // -------------------------------------End Show Projects-------------------------------------
    // ------------------------------------------------------------------------------------------
    const handleSubmit = async (event) => {

        event.preventDefault();
        var formData = new FormData(event.target);
        formData.append('owner', owner);
        formData.append('project',selectedProject)
        const selectedProjectValue = formData.get('project');
        const imageFile = formData.get('image');
        const captionValue = formData.get('caption');
      
        // Input validation
        if (!selectedProjectValue || !imageFile || !captionValue) {
          setError(
            "You must complete all the required inputs"
        );
          return;
        }
      

        await OnAddPost(formData);
    };
    // ------------------------------------------------------------------------------------------
    const OnAddPost = (formData) => {
        console.log(user.token)
        setIsLoading(true);
        axios
            .post(`/post/createPost`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': `Bearer ${user.token}`
                },
            })
            .then((response) => {
                console.log("Post added successfully", response.data);
                // do something else, such as update the UI
                setPosts([response.data, ...posts]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error Posting ", error);
                // handle the error, such as displaying an error message to the user
                setError(error.message);
                setIsLoading(false);
            });
    };
    // ------------------------------------------------------------------------------------------
    const fetchPost = async () => {
        // const token = localStorage.getItem('token'); // Récupère le token stocké dans le local storage du navigateur

        const response = await axios.get('/post/posts', {
            headers: {'Authorization': `Bearer ${user.token}`}})
        setUsers(response.data)
        console.log(response.data);

    }
    // ------------------------------------------------------------------------------------------
    useEffect(()=>{
        const fetchPost = async () => {

            const response = await axios.get(`/post/posts/${userId}`, {
                headers: {'Authorization': `Bearer ${user.token}`}})
            //setUsers(response.data)
            setPosts(response.data);
            console.log(response.data);

        }
        fetchPost()
    },[userId])



// ------------------------------------------------------------------------------------------
    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        await onAddComment(postId,content);
    };
    // ------------------------------------------------------------------------------------------
    const onAddComment = async (postId, content) => {
        console.log(postId);
        console.log(content);
        console.log(user.token);
        setIsLoading(true);
        axios
            .post(`/post/addComment`, { postId, content }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            })
            .then((response) => {
                console.log("Comment added successfully", response.data);
                // Update the comments state with the new comment
                setComments((prevComments) => ({
                    ...prevComments,
                    [postId]: [...(prevComments[postId] || []), response.data],
                }));
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error Commenting ", error);
                // handle the error, such as displaying an error message to the user
                setError(error.message);
                setIsLoading(false);
            });
    }
    return (
        <div className={styled.feed}>
            <Navbar/>
            <div className="row" style={{marginTop:"40px"}}>
                <div className="col-12 col-md-5 mx-auto shadow p-3 mb-5 bg-body rounded">

                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <Form.Select value={selectedProject} onChange={handleSelect}  style={{ color: 'black'}} >
                                <option value="">Select a project</option>
                                {Projects.map((project) => (
                                    <option key={project._id} value={project._id}>
                                        {project.ProjectName}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="What's on your mind?"
                                style={{ height: '100px',margin:"0",width:"100%" }}
                                name="caption"
                            />
                        </div>
                        {/* <textarea className={styles.postTop} rows="2" placeholder="What's on your mind?" type="text" name="caption" /> */}
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Control type="file" size="lg" name="image"  />
                        </Form.Group>
                        {/* <input type="file"  name="image" /> */}
                        <button type="submit" style={{float:"right"}} className="btn btn-sm btn-primary ms-1 ">Create Post</button>
                        {isLoading && <p>Loading...</p>}
                        {error    && <div  className="notices info" style={{textAlign:"center", backgroundColor:"#ff6b6b",opacity:"0.6",color:"white",borderRadius: "30px",marginTop:"3%"}}> <p>{error}</p></div>}
                    </form>

                </div>
            </div>
            <div className={styled.feedWrapper}>
                <div className="row">
                    <div className="col-12 col-md-5 mx-auto shadow p-3 mb-5 bg-body rounded">

                        <Form.Select value={selectedProject} onChange={handleSelect} size="lg" >
                            <option value="">Select a project</option>
                            {Projects.map((project) => (
                                <option key={project._id} value={project._id}>
                                    {project.ProjectName}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                {posts.map((post) => (
                    <Post
                        key={post._id}
                        post={post}
                        user={user}
                        handleCommentSubmit={handleCommentSubmit}
                        setContent={setContent}
                        setPostId={setPostId}
                        isLoading={isLoading}
                        error={error}
                        setComments={setComments}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )

}

export default Feed;
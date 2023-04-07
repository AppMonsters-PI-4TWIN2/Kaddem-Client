import { useAuthContext } from "../../hooks/useAuthContext";
import Navbar from "../Common/Navbar/navbar";
import Footer from "../Common/Footer/footer";

const Post = () => {
  return (
    <div>
      
      <Navbar />
      <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet"></link>
      <div className="newsfeed">
        <div className="container-fluid" id="wrapper">
          <div className="row newsfeed-size">
            <div className="col-md-12 newsfeed-right-side">
              <div className="row newsfeed-right-side-content mt-3">
                <div className="col-md-3 " id="sidebar-wrapper"></div>
                <div
                  className="col-md-6 second-section"
                  id="page-content-wrapper"
                >
                  <div className="mb-3">
                    <div className="btn-group d-flex">
                      <a
                        href="index.html"
                        className="btn btn-quick-links mr-3 ql-active"
                      >
                        <img
                          src="assets/images/icons/theme/speech.png"
                          className="mr-2"
                          alt="quick links icon"
                        />
                        <span className="fs-8">Speech</span>
                      </a>
                      <a
                        href="messages.html"
                        className="btn btn-quick-links mr-3"
                      >
                        <img
                          src="assets/images/icons/theme/listen.png"
                          className="mr-2"
                          alt="quick links icon"
                        />
                        <span className="fs-8">Listen</span>
                      </a>
                      <a href="watch.html" className="btn btn-quick-links">
                        <img
                          src="assets/images/icons/theme/watch.png"
                          className="mr-2"
                          alt="quick links icon"
                        />
                        <span className="fs-8">Watch</span>
                      </a>
                    </div>
                  </div>
                  <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                    <li className="media post-form w-shadow">
                      <div className="media-body">
                        <div className="form-group post-input">
                          <textarea
                            className="form-control"
                            id="postForm"
                            rows="2"
                            placeholder="What's on your mind, Arthur?"
                          ></textarea>
                        </div>
                        <div className="row post-form-group">
                          <div className="col-md-9">
                                <input type="file" />
                              <i  className="bx bx-images"></i>{" "}
                              <span>Photo/Video</span>
                            <button
                              type="button"
                              className="btn btn-link post-form-btn btn-sm"
                            >
                              <i className="bx bxs-group"></i>{" "}
                              <span>Tag Friends</span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-link post-form-btn btn-sm"
                            >
                              <i className="bx bxs-map"></i>{" "}
                              <span>Check In</span>
                            </button>
                          </div>
                          <div className="col-md-3 text-right">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Publish
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="posts-section mb-5">
                    <div className="post border-bottom p-3 bg-white w-shadow">
                      <div className="media text-muted pt-3">
                        <img
                          src="assets/images/users/user-1.jpg"
                          alt="Online user"
                          className="mr-3 post-user-image"
                        />
                        <div className="media-body pb-3 mb-0 small lh-125">
                          <div className="d-flex justify-content-between align-items-center w-100">
                            <a
                              href="#"
                              className="text-gray-dark post-user-name"
                            >
                              John Michael
                            </a>
                          </div>
                          <span className="d-block">
                            3 hours ago <i className="bx bx-globe ml-3"></i>
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quis voluptatem veritatis harum, tenetur,
                          quibusdam voluptatum, incidunt saepe minus maiores ea
                          atque sequi illo veniam sint quaerat corporis totam
                          et. Culpa?
                        </p>
                      </div>
                      <div className="d-block mt-3">
                        <img
                          src="assets/images/users/user-1.jpg"
                          height="500"
                          className="post-content"
                          alt="post image"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="argon-reaction">
                          <span className="like-btn">
                            <a
                              href="#"
                              className="post-card-buttons"
                              id="reactions"
                            >
                              <i className="bx bxs-like mr-2"></i> 67
                            </a>
                            <ul className="reactions-box dropdown-shadow">
                              <li
                                className="reaction reaction-like"
                                data-reaction="Like"
                              ></li>
                              <li
                                className="reaction reaction-love"
                                data-reaction="Love"
                              ></li>
                              <li
                                className="reaction reaction-haha"
                                data-reaction="HaHa"
                              ></li>
                              <li
                                className="reaction reaction-wow"
                                data-reaction="Wow"
                              ></li>
                              <li
                                className="reaction reaction-sad"
                                data-reaction="Sad"
                              ></li>
                              <li
                                className="reaction reaction-angry"
                                data-reaction="Angry"
                              ></li>
                            </ul>
                          </span>
                        </div>
                        <a  className="post-card-buttons" id="show-comments"><i className='bx bx-message-rounded mr-2'></i> 5</a>
                      </div>
                      <div
                        className="border-top pt-3 hide-comments"
                        style={{display: 0}}
                      >
                        <div className="row bootstrap snippets">
                          <div className="col-md-12">
                            <div className="comment-wrapper">
                              <div className="panel panel-info">
                                <div className="panel-body">
                                  <ul className="media-list comments-list">
                                    <li className="media comment-form">
                                      <a href="#" className="pull-left">
                                        <img
                                          src="assets/images/users/user-4.jpg"
                                          alt=""
                                          className="img-circle"
                                        />
                                      </a>
                                      <div className="media-body">
                                        <form action="" method="" role="form">
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="input-group">
                                                <input
                                                  type="text"
                                                  className="form-control comment-input"
                                                  placeholder="Write a comment..."
                                                />

                                                <div className="input-group-btn">
                                                  <button
                                                    type="button"
                                                    className="btn comment-form-btn"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Tooltip on top"
                                                  >
                                                    <i className="bx bxs-smiley-happy"></i>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn comment-form-btn comment-form-btn"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Tooltip on top"
                                                  >
                                                    <i className="bx bx-camera"></i>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn comment-form-btn comment-form-btn"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Tooltip on top"
                                                  >
                                                    <i className="bx bx-microphone"></i>
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn comment-form-btn"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Tooltip on top"
                                                  >
                                                    <i className="bx bx-file-blank"></i>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </li>
                                    <li className="media">
                                      <a href="#" className="pull-left">
                                        <img
                                          src="assets/images/users/user-2.jpg"
                                          alt=""
                                          className="img-circle"
                                        />
                                      </a>
                                      <div className="media-body">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                          <strong className="text-gray-dark">
                                            <a href="#" className="fs-8">
                                              Karen Minas
                                            </a>
                                          </strong>
                                        </div>
                                        <span className="d-block comment-created-time">
                                          30 min ago
                                        </span>
                                        <p className="fs-8 pt-2">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Lorem
                                          ipsum dolor sit amet,{" "}
                                          <a href="#">
                                            #consecteturadipiscing{" "}
                                          </a>
                                          .
                                        </p>
                                        <div className="commentLR">
                                          <button
                                            type="button"
                                            className="btn btn-link fs-8"
                                          >
                                            Like
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-link fs-8"
                                          >
                                            Reply
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Post;

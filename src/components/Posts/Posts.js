import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchPosts, deletePost } from "../../store/posts/posts.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "../shared/Loader";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.data);
  const isFetching = useSelector(({ posts }) => posts.isFetching);
  const errorMessage = useSelector(({ posts }) => posts.errorMessage);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (errorMessage) return errorMessage;

  if (isFetching) return <Loader />;

  if (posts.length !== 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Recent Posts
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {posts.map((post) => (
              <div className="group relative" key={post.id}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={`https://picsum.photos/280/320?random=${post.id}`}
                    alt={post.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`post/${post.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchPosts: () => dispatch(fetchPosts()),
//   deletePost: (id) => dispatch(deletePost(id)),
// });

// const mapStateToProps = (state) => ({
//   posts: state.posts.data,
//   user: state.user.data,
//   goal: state.hosld.data,
//   isFetching: state.posts.isFetching,
//   errorMessage: state.posts.errorMessage,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Posts)

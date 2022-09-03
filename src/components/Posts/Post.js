import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchRelatedPosts, fetchPost } from "../../store/posts/posts.actions";
import { useMatch, useParams, Link } from "react-router-dom";
import Loader from "../shared/Loader";

export default function Posts() {
  const dispatch = useDispatch();
  const post = useSelector(({ posts }) => posts.details);
  const posts = useSelector(({ posts }) => posts.data);
  const relatedPosts = useSelector(({ posts }) => posts.related);
  const isFetching = useSelector(({ posts }) => posts.isFetching);
  const errorMessage = useSelector(({ posts }) => posts.errorMessage);
  const { id: postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [postId]);

  useEffect(() => {
    dispatch(fetchRelatedPosts(post.userId));
  }, [post]);

  if (errorMessage) return errorMessage;

  if (isFetching) return <Loader />;

  if (Object.keys(post).length !== 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h2>
          <img
            src={`https://picsum.photos/980/360/?random=${post.id}`}
            alt={post.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          <div>{post.body}</div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Related Posts
          </h2>

          {relatedPosts.length !== 0 ? (
            <ul className="list-disc">
              {relatedPosts.map((item) => (
                <li key={item.id}>
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <>No related posts</>
          )}
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

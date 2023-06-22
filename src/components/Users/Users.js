import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUsers, deletePost } from "../../store/users/users.actions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "../shared/Loader";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const isFetching = useSelector(({ users }) => users.isFetching);
  const errorMessage = useSelector(({ users }) => users.errorMessage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (errorMessage) return errorMessage;

  if (isFetching) return <Loader />;

  if (users.length !== 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Recent Users
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {users.map((user) => (
              <div className="group relative" key={user.id}>
                <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none"></div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/users/${user.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {user.name}
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
//   fetchUsers: () => dispatch(fetchUsers()),
//   deletePost: (id) => dispatch(deletePost(id)),
// });

// const mapStateToProps = (state) => ({
//   users: state.users.data,
//   user: state.user.data,
//   goal: state.hosld.data,
//   isFetching: state.users.isFetching,
//   errorMessage: state.users.errorMessage,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Users)

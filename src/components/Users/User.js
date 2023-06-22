import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchUser } from "../../store/users/users.actions";
import { useMatch, useParams, Link } from "react-router-dom";
import Loader from "../shared/Loader";

export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.details);
  const users = useSelector(({ users }) => users.data);
  const relatedUsers = useSelector(({ users }) => users.related);
  const isFetching = useSelector(({ users }) => users.isFetching);
  const errorMessage = useSelector(({ users }) => users.errorMessage);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [userId]);

  if (errorMessage) return errorMessage;

  if (isFetching) return <Loader />;

  if (Object.keys(user).length !== 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {user.name}
          </h2>
          <img
            src={`https://picsum.photos/980/360/?random=${user.id}`}
            alt={user.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          <div>{user.email}</div>
        </div>
      </div>
    );
  }
}

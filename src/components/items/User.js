import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Layout from "../layout/Layout";
import "./../../util/styles/User.css";

export const User = () => {
  const [userData, setUserData] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);
  return (
    <Layout>
      {!loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="User">
          <div>
            <img src={userData.avatar_url} className="item_img" />
          </div>
          <h2>{userData.name || "User Name"}</h2>
          <p>Location: {userData.location}</p>
          <p>Email: {userData.email}</p>
          <p>Created: {userData.created_at}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Type: {userData.type}</p>
          <p>Created: {userData.created_at}</p>
          <p>Updated: {userData.updated_at}</p>
        </div>
      )}
    </Layout>
  );
};

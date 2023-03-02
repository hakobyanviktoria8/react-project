import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Layout from "./../../components/layout/Layout";
import "./../../util/styles/User.css";
import address from "./img/address.png";
import website from "./img/website.png";
import company from "./img/compani.png";
import email from "./img/email.png";
import { AboutUser } from "./AboutUser";

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
  }, [params]);

  console.log(userData);
  return (
    <Layout>
      {!loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={"User"}>
          <div className={"col"}>
            <img className={"avatar"} src={userData.avatar_url} alt="" />
            <h3>{userData.login}</h3>
            <a href={userData.html_url}>
              <button>Github profile</button>
            </a>
          </div>
          <div className={"col col-center"}>
            <h2>{userData.name}</h2>
            <span>{userData.bio}</span>
            <br />
            <br />
            <div className={"data"}>
              <div className={"data-img"}>
                <img src={website} alt="" />
              </div>
              <p>{userData.blog}</p>
            </div>
            <div className={"data"}>
              <div className={"data-img"}>
                <img src={address} alt="" />
              </div>
              <p>{userData.location}</p>
            </div>
            <div className={"data"}>
              <div className={"data-img"}>
                <img src={company} alt="" />
              </div>
              <p>{userData.company}</p>
            </div>
            <div className={"data"}>
              <div className={"data-img"}>
                <img src={email} alt="" />
              </div>
              <p>{userData.email}</p>
            </div>
            <div className={"data"}>
              <span>Create: {userData.created_at.slice(0, 10)}</span>
              <span>Update: {userData.updated_at.slice(0, 10)}</span>
            </div>
          </div>
        </div>
      )}
      <AboutUser userData={userData} />
    </Layout>
  );
};

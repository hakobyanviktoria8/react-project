import React, { useState } from "react";
import "./AboutUser.css";
import repos from "./img/repository.png";
import followers from "./img/followers.png";
import following from "./img/following.png";
import gists from "./img/gists.png";

import { Repository } from "./TypeBtn/Repository/Repository";
import { Followers } from "./TypeBtn/Followers/Followers";
import { Following } from "./TypeBtn/Following/Following";
import { Gists } from "./TypeBtn/Gists/Gists";

export function AboutUser({ userData }) {
  const [subPage, setSubPage] = useState("repository");
  console.log(11111111, subPage);
  return (
    userData && (
      <div className={"AboutUser"}>
        <nav>
          <button onClick={() => setSubPage("repository")}>
            <div className={"img"}>
              <img src={repos} alt="" />
            </div>
            <div className={"text"}>
              <h2>{userData.public_repos}</h2>
              <span>Repository</span>
            </div>
          </button>
          <button onClick={() => setSubPage("followers")}>
            <div className={"img"}>
              <img src={followers} alt="" />
            </div>
            <div className={"text"}>
              <h2>{userData.followers}</h2>
              <span>Followers</span>
            </div>
          </button>
          <button onClick={() => setSubPage("following")}>
            <div className={"img"}>
              <img src={following} alt="" />
            </div>
            <div className={"text"}>
              <h2>{userData.following}</h2>
              <span>Following</span>
            </div>
          </button>
          <button onClick={() => setSubPage("gists")}>
            <div className={"img"}>
              <img src={gists} alt="" />
            </div>
            <div className={"text"}>
              <h2>{userData.public_gists}</h2>
              <span>Gists</span>
            </div>
          </button>
        </nav>
        <div className={"main"}>
          {subPage === "repository" && (
            <Repository reposUrl={userData.repos_url} />
          )}
          {subPage === "followers" && (
            <Followers followsUrl={userData.followers_url} />
          )}
          {subPage === "following" && (
            <Following followgUrl={userData.following_url.slice(0, -13)} />
          )}
          {subPage === "gists" && (
            <Gists gistsUrl={userData.gists_url.slice(0, -10)} />
          )}
        </div>
      </div>
    )
  );
}

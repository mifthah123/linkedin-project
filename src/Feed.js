import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Create from "@mui/icons-material/Create";
import Image from "@mui/icons-material/Image";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    // setPosts;
  };

  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feedinput">
          <Create />
          <form>
            <input type={"text"} />
            <button onClick={sendPost} type={"submit"}>
              send
            </button>
          </form>
        </div>
      </div>
      <div className="feed_inputoption ">
        <InputOption Icon={Image} title="photo" color="#70b5f9" />
        <InputOption Icon={Subscriptions} title="video" color="#E7A33E" />
        <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
        <InputOption
          Icon={CalendarViewDay}
          title="Write article"
          color="#7FC15E"
        />
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="muhammed mifthah"
        description="This is a test"
        message="wow this worked"
      />
    </div>
  );
}

export default Feed;

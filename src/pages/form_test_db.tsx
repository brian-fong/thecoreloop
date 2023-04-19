import { useState } from "react";
import axios from "axios";

export default function TestForm() {
  const [userFormData, setUserFormData] = useState({
    twitterHandle: "twitter_sample",
    googleHandle: "google_sample",
    username: "username_sample",
  });

  const [gameFormData, setGameFormData] = useState({
    title: "League Of Legends",
    studio: "Riot Games",
    thumbnail: "example thumbnail",
    description: "Farm for CS",
    blockchain: "Etherium",
    tagline: "test-tagline",
    isTeam: "test boolean",
    fundraising: "test fundraising need clarification on this",
    links: "https://www.andrewchoi.dev",
    genres: "FPS",
    gallery: "Test gallery, I'm guessing this is a list of keys for S3",
    stage: "ALPHA",
  });
  /***************************** USER FUNCTIONS *******************************/
  function handleChangeUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserFormData((prevUserFormData) => ({
      ...prevUserFormData,
      [name]: value,
    }));
  }

  async function handleSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("UserFormData on frontend", userFormData);
    const resp = await axios.post("/api/prisma_user", userFormData);
    console.log("response received! haha successfully added user to db!", resp);
  }

  /**************************** GAME FUNCTIONS  ***********************************/
  function handleChangeGame(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserFormData((prevUserFormData) => ({
      ...prevUserFormData,
      [name]: value,
    }));
  }

  async function handleSubmitGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("GameFormData on frontend", gameFormData);
    const resp = await axios.post("/api/prisma_games", gameFormData);
    console.log("response received! haha successfully added user to db!", resp);
  }

  return (
    <div>
      {/* ****************************** USER FORM ***************************** */}
      <form onSubmit={handleSubmitUser}>
        <div>
          <label htmlFor="twitterHandle">Name</label>
          <input
            type="text"
            id="twitterHandle"
            name="twitterHandle"
            value={userFormData.twitterHandle}
            onChange={handleChangeUser}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <label htmlFor="googleHandle">Google handle:</label>
          <input
            type="text"
            id="googleHandle"
            name="googleHandle"
            value={userFormData.googleHandle}
            onChange={handleChangeUser}
            style={{ color: "black" }}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userFormData.username}
            onChange={handleChangeUser}
            style={{ color: "black" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* **********************    GAME FORM   ***************************** */}
      <br />

      <div>
        <form onSubmit={handleSubmitGame}>
          <div>
            <label htmlFor="Name">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={gameFormData.title}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="studio">Studio:</label>
            <input
              type="text"
              id="studio"
              name="studio"
              value={gameFormData.studio}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="thumbnail">thumbnail:</label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={gameFormData.thumbnail}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="blockchain">blockchain:</label>
            <input
              type="text"
              id="blockchain"
              name="blockchain"
              value={gameFormData.blockchain}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="description">description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={gameFormData.description}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="tagline">tagline:</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={gameFormData.tagline}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="isTeam">isTeam:</label>
            <input
              type="text"
              id="isTeam"
              name="isTeam"
              value={gameFormData.isTeam}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="fundraising">fundraising:</label>
            <input
              type="text"
              id="fundraising"
              name="fundraising"
              value={gameFormData.fundraising}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="links">links:</label>
            <input
              type="text"
              id="links"
              name="links"
              value={gameFormData.links}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="genres">genres:</label>
            <input
              type="text"
              id="genres"
              name="genres"
              value={gameFormData.genres}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="gallery">gallery:</label>
            <input
              type="text"
              id="gallery"
              name="gallery"
              value={gameFormData.gallery}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <div>
            <label htmlFor="stage">stage:</label>
            <input
              type="text"
              id="stage"
              name="stage"
              value={gameFormData.stage}
              onChange={handleChangeGame}
              style={{ color: "black" }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

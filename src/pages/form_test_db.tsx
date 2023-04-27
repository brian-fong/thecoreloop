import React, { useState } from "react";
import axios from "axios";

//You can also use a library like react-toastify or react-alert to create notifications for error messages.
export default function TestForm() {
  const [userFormData, setUserFormData] = useState({
    handle: "handle",
  });

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  function handleChangeQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  /***************************** USER FUNCTIONS *******************************/

  //handle form
  function handleChangeUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserFormData((prevUserFormData) => ({
      ...prevUserFormData,
      [name]: value,
    }));
  }

  //REQUEST CREATING USER
  async function createNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("UserFormData on frontend", userFormData);
    try {
      const resp = await axios.post("/api/users/createNewUser", userFormData);
      console.log(
        "response received! haha successfully added user to db!",
        resp
      );
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.error(
        "seems something went wrong... this is the Error Message: \n",
        error
      );
      setResponse(JSON.stringify(error));
    }
  }

  //REQUEST GET ALL USERS
  async function getAllUsers(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Attempting to get information on all users.");
    try {
      const resp = await axios.get("/api/users/");
      console.log(resp.data);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.error(
        "something went wrong... please look at the error messages \n",
        error
      );
      setResponse(JSON.stringify(error));
    }
  }

  async function handleGetUser(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const resp = await axios.get(`/api/users/${query}`);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.error(
        `unable to retrieve specified user with the handle of ${query}`,
        error
      );
      setResponse(JSON.stringify(error));
    }
  }

  /**************************** GAME FUNCTIONS  ***********************************/
  const [gameFormData, setGameFormData] = useState({
    name: "League Of Legends",
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

  function handleChangeGame(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setGameFormData((prevUserFormData) => ({
      ...prevUserFormData,
      [name]: value,
    }));
  }

  async function createNewProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("GameFormData on frontend", gameFormData);
    const resp = await axios.post(
      "/api/projects/createNewProject",
      gameFormData
    );
    console.log("response received! haha successfully added user to db!", resp);
    setResponse(JSON.stringify(resp.data));
  }

  async function handleGetGame(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("attempting to get projects with that name");
    const splitQuery = query.split(", ");
    const studio = splitQuery[0].replace(/ /g, "-");
    const name = splitQuery[1].replace(/ /g, "-");
    try {
      const resp = await axios.get(`/api/projects/${studio}/${name}`);
      console.log(resp);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.error(error);
      setResponse(JSON.stringify(error));
    }
  }
  async function getAllGames(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const resp = await axios.get("/api/projects/");
      console.log(resp);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.log(error);
      setResponse(JSON.stringify(error));
    }
  }

  async function getProjectsByStudio(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const studio = query.replace(/ /g, "-");
      const resp = await axios.get(`api/projects/${studio}`);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      setResponse(JSON.stringify(error));
    }
  }

  async function handleUpdateGame(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `/api/projects/${gameFormData.studio}/${gameFormData.name}/update`,
        gameFormData
      );
      console.log(resp);
      setResponse(JSON.stringify(resp.data));
    } catch (error) {
      console.error(error);
      setResponse(JSON.stringify(error));
    }
  }
  return (
    <div>
      {/* ****************************** USER FORM ***************************** */}
      <form onSubmit={createNewUser}>
        <div>
          <label htmlFor="handle">twitter/gmail: </label>
          <input
            type="text"
            id="handle"
            name="handle"
            value={userFormData.handle}
            onChange={handleChangeUser}
            style={{ color: "black" }}
          />
        </div>
        <button style={{ border: "2px solid white" }} type="submit">
          Submit
        </button>
      </form>
      {/* **********************    GAME FORM   ***************************** */}
      <br />

      <div>
        <form onSubmit={createNewProject}>
          <div>
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={gameFormData.name}
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
          <button style={{ border: "2px solid white" }} type="submit">
            Submit
          </button>
        </form>
        <button
          style={{ border: "2px solid white" }}
          type="submit"
          onClick={handleUpdateGame}
        >
          Update
        </button>
        <br />
        <br />
        <br />
        {/***************************** GET STUFF ****************************/}
        <label> Query </label>
        <input
          type="text"
          id="game_title"
          name="gameTitle"
          value={query}
          onChange={handleChangeQuery}
          style={{ color: "black" }}
        ></input>

        <button style={{ border: "2px solid white" }} onClick={handleGetGame}>
          GET GAME BY TITLE
        </button>
        <button
          style={{ border: "2px solid white" }}
          onClick={getProjectsByStudio}
        >
          GET GAME BY STUDIO
        </button>

        <button style={{ border: "2px solid grey" }} onClick={handleGetUser}>
          GET USER BY NAME
        </button>
        <br />
        <button style={{ border: "2px solid white" }} onClick={getAllUsers}>
          {" "}
          GET ALL USERS!
        </button>
        <br />
        <button style={{ border: "2px solid white" }} onClick={getAllGames}>
          GET ALL GAMES!
        </button>
        <br />
        <br />
      </div>
      {response ? <div> {response} </div> : ""}
    </div>
  );
}

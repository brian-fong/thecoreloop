import { useState } from 'react';
import axios from 'axios';
export default function TestForm() {
  const [formData, setFormData] = useState({
    twitterHandle: 'twitter_sample',
    googleHandle: 'google_sample',
    username: 'username_sample',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log("formData on frontend",formData);
    const resp = await axios.post("/api/prisma_user", formData)
    console.log("response received! haha successfully added user to db!",resp)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="twitterHandle">Twitter handle:</label>
        <input
          type="text"
          id="twitterHandle"
          name="twitterHandle"
          value={formData.twitterHandle}
          onChange={handleChange}
          style={{color:"black"}}
        />
      </div>
      <div>
        <label htmlFor="googleHandle">Google handle:</label>
        <input
          type="text"
          id="googleHandle"
          name="googleHandle"
          value={formData.googleHandle}
          onChange={handleChange}
          style={{color:"black"}}
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{color:"black"}}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
//import Candidate from '../interfaces/Candidate';

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    if (!process.env.VITE_GITHUB_TOKEN) {
      throw new Error("GitHub token is not defined");
    }

    const response = await fetch(
      `https://api.github.com/users?since=${start}` /*,
      {
        headers: {
          Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
        },
      }*/
    );

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No users found in the API response");
    }

    return { login: data[0].login }; // Return an object with a consistent format
  } catch (err) {
    console.log("An error occurred:", err.message);
    return null; // Return null to indicate failure
  }
};

const searchGithubUser = async (username) => {
  try {
    if (!process.env.VITE_GITHUB_TOKEN) {
      throw new Error("GitHub token is not defined");
    }
    const response = await fetch(`https://api.github.com/users/${username}`/*, {
      headers: {
        Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
      },
    }*/);

    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }

    const data = await response.json();

    const candidate = {
      name: data.name || "Not Available",
      login: data.login || "Not Available",
      location: data.location || "Not Available",
      avatar_url: data.avatar_url || "Not Available",
      email: data.email || "Not Available",
      html_url: data.html_url || "Not Available",
      company: data.company || "Not Available",
    };

    return candidate;
  } catch (err) {
    console.log("an error occurred", err);
    return {
      name: "Not Available",
      login: "Not Available",
      location: "Not Available",
      avatar_url: "../assets/placeholder.png",
      email: "Not Available",
      html_url: "Not Available",
      company: "Not Available",
    };
  }
};

export { searchGithub, searchGithubUser };

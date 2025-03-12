//import dotenv from 'dotenv';
//dotenv.config();
import Candidate from '../interfaces/Candidate';

const searchGithub = async () => {
  try {
    console.log(import.meta.env.VITE_GITHUB_TOKEN);

    const start = Math.floor(Math.random() * 100000000) + 1;

    console.log(import.meta.env);

    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error('GitHub token is not defined');
    }
    const response = await fetch(
      `https://api.github.com/users?since=${start}`/*,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          // Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
        },
      }
        */
    );
    console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    //console.log('Data:', data[0]);
    console.log(data[0].login);
    return data[0].login;
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate> => {
  try {
    console.log(import.meta.env.VITE_GITHUB_TOKEN);
    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error('GitHub token is not defined');
    }
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        //Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    const candidate: Candidate = {
      name: data.name || "Not Available",
      login: data.login || "Not Available",
      location: data.location || "Not Available",
      avatar_url: data.avatar_url || "Not Available",
      email: data.email || "Not Available",
      html_url: data.html_url || "Not Available",
      company: data.company || "Not Available",
    }

    return candidate;
  } catch (err) {
    console.log('an error occurred', err);
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

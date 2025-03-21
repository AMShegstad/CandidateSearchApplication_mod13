import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Candidate from '../interfaces/Candidate';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this path is correct
import { v4 as uuidv4 } from 'uuid';
//import { Placeholder } from 'react-bootstrap';

const CandidateCard = () => {
    const [user, setUser] = useState(null);

    const rerunSearch = async () => {
        try {
            const response = await axios.get('/api/searchGithub');
            const usernames = response.data;
            if (usernames.length > 0) {
                const userResponse = await axios.get(`/api/searchGithubUser/${usernames[0]}`);
                setUser(userResponse.data);
            }
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const saveCandidate = () => {
        if (user) {
            const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
            const candidateWithId = { ...user, id: uuidv4() };
            savedCandidates.push(candidateWithId);
            localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
            rerunSearch();
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/searchGithub');
                const usernames = response.data;
                console.log(response.data);
                if (usernames.length > 0) {
                    const userResponse = await axios.get(`/api/searchGithubUser/${usernames[0]}`);
                    setUser(userResponse.data);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    const placeholderImage = "../assets/placeholder.png"

    return (
        <div className="container mt-4">
            <div className="card mx-auto" style={{ maxWidth: '800px' }}>
                <img src={user.avatar_url || placeholderImage} className="card-img-top" alt={user.name || "Not Available"} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h2 className="card-title">{user.name || "Not Available"}</h2>
                    <p className="card-text">Username: {user.login || "Not Available"}</p>
                    <p className="card-text">Location: {user.location || "Not Available"}</p>
                    <p className="card-text">Email: {user.email || "Not Available"}</p>
                    <p className="card-text">Company: {user.company || "Not Available"}</p>
                    <a href={user.html_url || "Not Available"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Profile</a>
                    <div className="mt-3">
                        <button onClick={saveCandidate} className="btn btn-success me-2"><FaPlus /></button>
                        <button onClick={rerunSearch} className="btn btn-danger"><FaMinus /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateCard;
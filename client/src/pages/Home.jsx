import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import githubImage from '../assets/githubImage.jpg';

const Home = () => {
    const [candidate, setCandidate] = useState(null);

    // useEffect(() => {
    //     const fetchCandidate = async () => {
    //         try {
    //             const response = await fetch('/api/searchGithub');
    //             const data = await response.text();
    //             setCandidate(data);
    //         } catch (error) {
    //             console.error('Error fetching candidate:', error);
    //         }
    //     };

    //     fetchCandidate();
    // }, []);

    return (
        //<div style={{ color: 'white', backgroundColor: '#333', height: '100vh' }}>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <div style={{ color: 'white', alignItems: 'center'}}>
                    <h1>Search for Candidates on GitHub!</h1>
                    <img src={githubImage} alt="githubImage"></img>
                    <h3>Click "Potential Candidates" to view an option for hire.</h3>
                    <h3>Click "Saved Candidates" to view your saved candidates.</h3>
                </div>
            </div>
        //</div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Candidate {
    id: string;
    avatar: string;
    name: string;
    location: string;
    company: string;
    email: string;
}

const SavedCandidateList: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        const savedCandidates = localStorage.getItem('savedCandidates');
        if (savedCandidates) {
            setCandidates(JSON.parse(savedCandidates));
        }
    }, []);

    const removeCandidate = (id: string) => {
        const updatedCandidates = candidates.filter(candidate => candidate.id !== id);
        setCandidates(updatedCandidates);
        localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    };

    return (
        <div className="container mt-4">
            <table className="table table-striped table-responsive">
                <thead className="thead-dark">
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td><img src={candidate.avatar} alt={candidate.name} width="50" className="img-fluid" /></td>
                            <td>{candidate.name}</td>
                            <td>{candidate.location}</td>
                            <td>{candidate.company}</td>
                            <td>{candidate.email}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => removeCandidate(candidate.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SavedCandidateList;
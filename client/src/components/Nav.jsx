import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/CandidateSearch">Potential Candidates</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/SavedCandidates">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

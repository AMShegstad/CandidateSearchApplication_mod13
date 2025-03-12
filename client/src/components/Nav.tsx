import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CandidateSearch">Potential Candidates</Link>
          </li>
          <li>
            <Link to="/SavedCandidates">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
    );
  };


export default Nav;

import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Fitness Application</h1>
        </Link>
        
        <nav>
          {user ? (
            <div>
              <Link to="/">Home</Link>
              <Link to="/BMI">BMI</Link>
              <Link to="/chatbot">Chatbot</Link>
              
              <button onClick={handleClick}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>

            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

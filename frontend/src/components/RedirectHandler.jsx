import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (role) {
      switch (role) {
        case 'student':
          navigate('/dashboard/student');
          break;
        case 'agent':
          navigate('/dashboard/agent');
          break;
        case 'admin':
          navigate('/dashboard/admin');
          break;
        default:
          navigate('/');
      }
    }
  }, [role, navigate]);

  return null; // This component doesn't render anything, it just redirects
};

export default RedirectHandler;

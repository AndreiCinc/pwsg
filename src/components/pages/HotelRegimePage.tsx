import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HotelRegimePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin-airbnb', { replace: true });
  }, [navigate]);

  return null;
}

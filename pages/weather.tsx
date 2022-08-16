import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';

const Weather: NextPage = () => {
  const [date, setDate] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <form>
      <input type="date" onChange={onChange} value={date} />
      <button
        onClick={(e) => {
          axios.get(`/api/weather/${date}`);
          e.preventDefault();
        }}>
        Update
      </button>
    </form>
  );
};

export default Weather;

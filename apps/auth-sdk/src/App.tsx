import { useState } from 'react';
import './App.css';
import { AuthTarget } from './types';
import { Button } from '@repo/sin-na/Button/Button';

function App() {
  const [authList, setAuthList] = useState<AuthTarget[]>(['KAKAO', 'NAVER', 'TOSS', 'PASS', 'MOBILE', 'CARD', 'SOL', 'FINANCE']);

  return (
    <>
      <h1>React Auth SDK</h1>
      {authList.map((auth) => (
        <Button key={auth} size="medium">
          {auth}
        </Button>
      ))}
    </>
  );
}

export default App;

import React from 'react';
import './style.css';
import { useEarthoOne } from '@eartho/one-client-react';
import AddIdea from './component/AddIdea';
export default function App() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isConnected) {
    console.log(user);
    return (
      <>
        <div className="col-12" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <h1>Hello, {user.user.displayName}</h1>
            </div>
          </div>
          <div
            style={{
              borderRadius: 50,
              width: 100,
              height: 100,
              border: '1px solid red',
              overflow: 'hidden',
            }}
          >
            <img src={user.user.photoURL} width={100} height={100} />
          </div>
          {user.user.displayName}
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>

          <AddIdea />
        </div>
      </>
    );
  } else {
    return (
      <button
        className="btn btn-outline-success"
        id="login"
        onClick={() => connectWithPopup({ access_id: 'gHnGmdqszGAjvgW1GPmf' })}
      >
        Log in
      </button>
    );
  }
}

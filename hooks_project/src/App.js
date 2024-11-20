import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login/login';
import ResponsiveAppBar from './pages/layout/header/header';
import Wrapper from './pages/layout/wrapper/wrapper';
import { Component } from 'react';
import Registration from './pages/auth/registration/registration';
function App() {

  let public_router = [
    {
      path: "/",
      Component: <Login />
    },
    {
      path: "/registration",
      Component: <Registration />
    },
  ]
  return (
    <div className="App">

      <Router>
        <Wrapper>
          <Routes>
            {public_router.map((item) => {
              return (
                <>

                  <Route path={item.path} element={item.Component} />

                </>
              )
            })}
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;

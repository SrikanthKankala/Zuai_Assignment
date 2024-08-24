import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>ZuAI Application</h1>
        </header>
        <main className="app-main">
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/new" component={NewPost} />
            <Route path="/edit/:id" component={EditPost} />
          </Switch>
        </main>
        <footer className="app-footer">
          
            <p>Srikanth@Web Developer</p>
            <p>kankalasrikanth1@gmail.com</p>
            <p>9010098394</p>
          
          <p>ZuAI Application © 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';

import Jobs from './components/Jobs';
import fetch from 'node-fetch';

async function fetchJobs(updateCb) {
  const res = await fetch('http://localhost:8080/jobs');
  const json = await res.json();
  updateCb(json);
}

function App() {

  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;

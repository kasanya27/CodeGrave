import React, { useState } from 'react';

function SubmitGrave() {
  const [repo, setRepo] = useState('');
  const [eulogy, setEulogy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Repo: ${repo}, Eulogy: ${eulogy}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Submit a Dead Repo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="GitHub Repo URL" value={repo} onChange={e => setRepo(e.target.value)} className="w-full p-2 border" />
        <textarea placeholder="Write a eulogy..." value={eulogy} onChange={e => setEulogy(e.target.value)} className="w-full p-2 border" rows="5"></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
export default SubmitGrave;
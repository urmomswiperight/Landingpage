import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

// Access the Google Apps Script URL from environment variables
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

export function QualificationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '<5k',
    challenges: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-surface border border-border rounded-2xl text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-display font-bold mb-2">Application Received</h3>
        <p className="text-muted">Thank you! We've received your details and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-border shadow-2xl">
      <h2 className="text-3xl font-display font-bold mb-6 text-white">Let's Assess Your Workflow</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted">Full Name</label>
          <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-background border border-border rounded-lg p-3 text-white focus:ring-2 focus:ring-accent outline-none" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted">Business Email</label>
          <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-background border border-border rounded-lg p-3 text-white focus:ring-2 focus:ring-accent outline-none" />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="website" className="text-sm font-medium text-muted">Website URL</label>
        <input type="url" id="website" value={formData.website} onChange={handleChange} className="w-full bg-background border border-border rounded-lg p-3 text-white focus:ring-2 focus:ring-accent outline-none" />
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="budget" className="text-sm font-medium text-muted">Monthly Automation Budget</label>
        <select id="budget" value={formData.budget} onChange={handleChange} className="w-full bg-background border border-border rounded-lg p-3 text-white focus:ring-2 focus:ring-accent outline-none">
          <option value="<5k">&lt; $5k</option>
          <option value="5k-10k">$5k - $10k</option>
          <option value="10k+">$10k+</option>
        </select>
      </div>

      <div className="space-y-2 mb-8">
        <label htmlFor="challenges" className="text-sm font-medium text-muted">Key Operational Challenges</label>
        <textarea id="challenges" rows="4" value={formData.challenges} onChange={handleChange} className="w-full bg-background border border-border rounded-lg p-3 text-white focus:ring-2 focus:ring-accent outline-none" placeholder="What is currently slowing your team down?" />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="w-full bg-white text-background font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50">
        {status === 'submitting' ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
        {status === 'submitting' ? 'Submitting...' : 'Submit Qualification'}
      </button>

      {status === 'error' && (
        <p className="mt-4 text-red-400 flex items-center gap-2 text-sm"><AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

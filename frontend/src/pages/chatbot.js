import React, { useState, useEffect } from 'react';
import '../styles/Chatbot.css'; // Import CSS for Chatbot styles

const Chatbot = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    // Display initial message when component mounts
    setResponse("Hi there! How can I help you with your fitness questions?");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state while fetching data

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      console.error('Error:', error);
      // Handle error state or display an error message to the user
    } finally {
      setLoading(false); // Reset loading state after fetching data
    }
  };

  const formatResponse = (text) => {
    // Split the response into sections based on double asterisks (**) and bullet points (*)
    const sections = text.split(/\*\*|\*/);
    let formattedText = [];

    sections.forEach((section, index) => {
      // Skip empty sections and trim excess whitespace
      if (section.trim() !== '') {
        formattedText.push(<p key={index}>{section.trim()}</p>);
      }
    });

    return (
      <div className="chatbot-response">
        {formattedText.length > 0 ? formattedText : <p>No response found.</p>}
      </div>
    );
  };

  return (
    <div className="chatbot-page">
      <h1 className="chatbot-header">Fitness Chatbot</h1>
      <div className="initial-message">
        <p>Welcome to our fitness chatbot! How can I help you today?</p>
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a fitness question..."
          className="chatbot-input"
          disabled={loading} // Disable input while loading
        />
        <button type="submit" className="chatbot-submit-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {response && formatResponse(response)}
    </div>
  );
};

export default Chatbot;

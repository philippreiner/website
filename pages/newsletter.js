import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Newsletters = ({ newsletters }) => {
  if (newsletters.length === 0) {
    return <div>No newsletters found.</div>;
  }

  return (
    <div>
      <h1>Newsletters</h1>
      <ul>
        {newsletters.map((newsletter) => (
          <li key={newsletter.id}>
              <a href={newsletter.url} target="_blank" rel="noopener noreferrer">
                {newsletter.title}
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const API_KEY = '973d4855-fa6b-480d-9b57-0a30a7967efe';
  let newsletters = [];

  try {
    const response = await axios.get(`https://api.buttondown.email/v1/emails?status=sent&page_size=100`, {
      headers: {
        Authorization: `Token ${API_KEY}`,
      },
    });

    newsletters = response.data.results.map((newsletter) => ({
      id: newsletter.id,
      title: newsletter.subject,
      url: newsletter.absolute_url,
    }));
  } catch (error) {
    console.error('Failed to fetch newsletters:', error.message);
  }

  return {
    props: {
      newsletters,
    },
  };
}

export default Newsletters;
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

export async function getStaticProps() {
  const API_KEY = process.env.NEXT_PUBLIC_BUTTONDOWN_API_KEY;
  let newsletters = [];

  try {
    const response = await axios.get(`https://api.buttondown.email/v1/emails?status=sent&order=-published&page_size=100`, {
      headers: {
        Authorization: `Token ${API_KEY}`,
      },
    });

    newsletters = response.data.results
    .map((newsletter) => ({
      id: newsletter.id,
      title: newsletter.subject,
      url: newsletter.absolute_url,
    }))
    .reverse();
  } catch (error) {
    console.error('Failed to fetch newsletters:', error.message);
  }

  return {
    props: {
      newsletters,
    },
    revalidate: false, // In seconds or false
  };
}

export default Newsletters;
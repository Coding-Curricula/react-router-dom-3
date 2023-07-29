import React from "react";

function Hero() {
  return (
    <div>
      <h1>Our Webpage</h1>
      <p>This talks about our site.</p>
      <button>Click Here to Connect</button>
    </div>
  );
}

function Content() {
  return (
    <div>
      <h2>Content</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

function Features() {
  return (
    <div>
      <h2>Features</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Features />
    </div>
  );
}

import React from 'react'

function PageTitle() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function PageContent() {
  return (
    <div>
      <p>Some content about us.</p>
    </div>
  )
}

function PageFeatures() {
  return (
    <div>
      <h2>Features</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <PageTitle />
      <PageContent />
      <PageFeatures />
    </div>
  )
}

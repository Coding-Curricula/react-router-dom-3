import React, { useState } from "react";

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form action="submit">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

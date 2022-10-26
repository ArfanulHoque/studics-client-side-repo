import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mb-4">
      <h1 className="text-info">Questions and Answers</h1>
      <hr />
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-4 mb-4">
        <h3>1. What is cors?</h3>
        <p>
          Node.js is an open-source and cross-platform runtime used when
          executing JavaScript code on the server-side. One of the popular
          Node.js server frameworks is Express. Implementing CORS in Node.js
          helps you access numerous functionalities on the browser.
        </p>
      </div>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-4 mb-4">
        <h3>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
          <p className="fw-bold">Other User Authentication Platforms</p>
          <ul>
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Supabase</li>
            <li>Okta</li>
            <li>Pingldentity</li>
            <li>Keycloak</li>
            <li>Frontegg</li>
            <li>Authress</li>
          </ul>
        </p>
      </div>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-4 mb-4">
        <h3>3. How does the private route work?</h3>
        <p>
          The react private route component renders child components (children)
          if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </div>
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-4 mb-4">
        <h3>4. What is Node? How does Node work?</h3>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request
        </p>
      </div>
    </div>
  );
};

export default Blog;

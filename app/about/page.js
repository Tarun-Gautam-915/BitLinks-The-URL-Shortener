import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-purple-50 p-6">
        <div className="max-w-2xl rounded-xl shadow-md p-8 space-y-4 bg-purple-100">
          <h1 className="text-3xl font-bold text-purple-700">About BitLinks</h1>
          <p>
            <strong>BitLinks</strong> is a simple and secure URL shortener designed to make sharing links effortless. Unlike most services that track your data or require sign-ups, BitLinks respects your privacy and offers a clean, no-login experience.
          </p>
          <p>
            Whether you're a student, developer, or content creator, BitLinks lets you create customized short links that are easy to remember and fast to redirect.
          </p>
          <p>
            Built using <strong>Next.js App Router</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>, BitLinks is designed with performance and simplicity in mind. This project was developed by <strong>Your Name</strong> as a learning and showcase project.
          </p>
          <p>
            We believe in open, accessible tools — and BitLinks is our contribution to the open web.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;

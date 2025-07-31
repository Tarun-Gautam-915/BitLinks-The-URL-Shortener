import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-purple-50 p-6">
        <div className="max-w-2xl bg-purple-100 rounded-xl shadow-md p-8 space-y-4">
          <h1 className="text-3xl font-bold text-purple-700">Contact Me</h1>
          <p>If you'd like to connect, collaborate, or provide feedback, feel free to reach out through any of the platforms below:</p>

          <ul className="space-y-2">
            <li>
              📧 Email: <a href="mailto:tarungautam@gmail.com" className="text-purple-600 underline">tarungautam@gmail.com</a>
            </li>
            <li>
              🐱 GitHub: <Link href="https://github.com/Tarun-Gautam-915" className="text-purple-600 underline">github.com/Tarun-Gautam-915</Link>
            </li>
            <li>
              💼 LinkedIn: <Link href="https://linkedin.com/in/tarun-gautam915" className="text-purple-600 underline">linkedin.com/in/tarun-gautam915</Link>
            </li>
            <li>
              🌐 Portfolio: <Link href="https://tarunportfoliowebsite.netlify.app/" className="text-purple-600 underline">tarunportfoliowebsite.netlify.app/</Link>
            </li>
          </ul>

          <p>
            This project is open-source — feel free to contribute, clone, or give it a ⭐ on GitHub.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;

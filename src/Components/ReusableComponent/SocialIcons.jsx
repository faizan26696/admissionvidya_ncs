import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-colors"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <FaFacebook size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;

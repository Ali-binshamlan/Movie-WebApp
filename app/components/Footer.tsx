"use client";

import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p>Designed by Engineer Ali Bin Shamlan</p>
        <div className="flex space-x-6 text-xl">
          {/* WhatsApp */}
          <a
            href="https://wa.me/967774945757"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ali-bin-shamlan-ba6237341/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ali-binshamlan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a
            href="https://drive.google.com/drive/u/2/folders/1VY37P9gOxNvEMhOiHno6oMHkjZsy75S9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio Folder"
            className="hover:text-yellow-400 transition flex items-center gap-1"
          >
            <FaFolderOpen size={20} />
          </a>
          {/* Email */}
          <a
            href="mailto:ali.binshamlan12@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

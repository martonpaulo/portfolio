"use client";

import { useState } from "react";
import projects from "@/app/data/projects.json";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  // Sort projects first by needsMaintenance, then by datePublished
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.needsMaintenance && !b.needsMaintenance) return 1;
    if (!a.needsMaintenance && b.needsMaintenance) return -1;
    return new Date(b.datePublished) - new Date(a.datePublished);
  });

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {sortedProjects.map((project) => (
        <div
          key={project.title}
          className="mb-8 p-4 border border-gray-200 rounded-lg"
        >
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-16 h-16 mb-4"
            />
          )}
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-2">
            Published on:{" "}
            {new Date(project.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mb-4">{project.description}</p>
          <div className="flex space-x-4 mb-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="text-blue-500 hover:text-purple-500 hover:font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            )}
            <a
              href={project.sourceCode}
              className="text-blue-500 hover:text-purple-500 hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="flex flex-wrap space-x-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                #{tech}
              </span>
            ))}
          </div>
          {project.media && (
            <img
              src={project.media}
              alt={`${project.title} media`}
              className="w-64 h-64 object-cover cursor-pointer"
              onClick={() => openModal(project.media)}
            />
          )}
        </div>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected media"
              className="max-w-full max-h-full mb-4"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

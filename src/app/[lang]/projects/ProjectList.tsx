/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectList({ projects }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {projects.map((project: any) => (
        <div
          key={project.name}
          className="mb-8 p-4 border border-gray-200 rounded-lg"
        >
          {project.logoUrl && (
            <Image
              src={project.logoUrl}
              alt={`${project.name} logo`}
              width={64}
              height={64}
              className="w-16 h-16 mb-4"
            />
          )}
          <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
          <p className="text-gray-600 mb-2">
            Published on:{" "}
            {new Date(project.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mb-4">{project.summary}</p>
          <div className="flex space-x-4 mb-4">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                className="text-blue-500 hover:text-purple-500 hover:font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            )}
            <a
              href={project.repositoryUrl}
              className="text-blue-500 hover:text-purple-500 hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="flex flex-wrap space-x-2 mb-4">
            {project.techStack.map((tech: any) => (
              <span
                key={tech.id}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                #{tech.name}
              </span>
            ))}

            {project.tags.map((tag: any) => (
              <span
                key={tag.id}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                #{tag.name}
              </span>
            ))}
          </div>
          {project.demoMediaUrl && (
            <Image
              src={project.demoMediaUrl}
              alt={`${project.name} media`}
              width={256} // Adjust width and height as needed
              height={256}
              className="w-64 h-64 object-cover cursor-pointer"
              onClick={() => openModal(project.demoMediaUrl)}
            />
          )}
        </div>
      ))}

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected media"
              width={800}
              height={800}
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
    </>
  );
}

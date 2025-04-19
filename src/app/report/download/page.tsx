"use client";
import React from "react";
import { Download, BookOpen } from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Exploring Ship Building and Ship Repair Clusters in Mulapeta and Durgarajapatnam",
    description: "Detailed analysis of maritime industry clusters in Andhra Pradesh.",
    url: "/docs/Exploring Ship Building and Ship Repair Clusters in Mulapeta and Durgarajapatnam- FINALL.pdf",
    tag: "Industry"
  },
  {
    id: 2,
    title: "Government Initiatives",
    description: "Overview of recent government efforts in infrastructure and economy.",
    url: "/docs/Government initiatives.pdf",
    tag: "Policy"
  },
  {
    id: 3,
    title: "Research Insights",
    description: "Insights and trends from our latest research studies.",
    url: "/docs/research-insights.pdf",
    tag: "Research"
  },
];

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">📄 Documents & Reports</h1>
        <p className="text-lg text-gray-600 mb-12">
          Browse, preview, or download detailed documents and reports.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-3">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {doc.tag}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-indigo-900 mb-2">{doc.title}</h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{doc.description}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read
                </a>
                <a
                  href={doc.url}
                  download
                  className="inline-flex items-center px-3 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg transition"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;

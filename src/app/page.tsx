"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SkillsList from "@/app/components/SkillsList";
import UnderConstruction from "@/app/components/UnderConstruction";
import FindMeOnline from "@/app/components/FindMeOnline";
import Description from "@/app/components/Description";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`wrapper max-w-screen-lg mx-auto`}>
      <div className="absolute top-4 right-4">
        <button
          disabled
          onClick={toggleDarkMode}
          className="text-sm toggle-dark-mode px-4 py-2 border rounded-md disabled:opacity-50"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Header />
      <UnderConstruction />
      <Description />
      <SkillsList />
      <FindMeOnline />
      <Footer />
    </div>
  );
}

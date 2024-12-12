export default function SkillsList() {
  const skills = [
    "HTML 5, CSS 3, JavaScript, TypeScript",
    "React, Redux, Next.js, Angular 9+, NgRx, RxJS",
    "Tailwind CSS, Material UI, Bootstrap, Sass",
    "Git, GitHub, GitLab, GitFlow, Jira, Confluence",
    "Jest, Cypress, Selenium, Storybook",
    "Python, Docker, MySQL, MongoDB",
    "React Native, Expo, Electron.js",
    "Agile, Scrum, Kanban, XP Programming",
    "Google Analytics, Accessibility, Web scraping, AI",
  ];

  return (
    <section className="px-4 mt-16">
      <p className="text-base sm:text-lg">My skills: </p>
      <ul>
        {skills.map((skill) => (
          <li key={skill} className="font-mono leading-6 list-disc">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="text-center py-4 mt-8">
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <p className="text-sm text-gray-600 mb-2">
        © {new Date().getFullYear()} Marton Paulo. All rights reserved.
      </p>
      <a
        href="https://github.com/martonpaulo/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-deep-blue-700 hover:text-blue-700 transition-colors hover:font-bold"
      >
        Source Code
      </a>
    </footer>
  );
}

const Base = ({
  author,
  avatar,
  children,
}: {
  author: string;
  avatar: string;
  children: React.ReactNode;
}) => {
  return (
    <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
        <header className="flex items-center justify-between py-10">
          <div>
            <a aria-label="talha tahir" href="/">
              <div className="flex items-center justify-between">
                <div className="h-6 text-2xl font-semibold sm:block">
                  {author}'s blog
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
            <a
              className="sm:block font-medium text-gray-900 dark:text-gray-100"
              href="/"
            >
              Blog
            </a>
            <div className="fixed left-0 top-0 z-10 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-gray-950 translate-x-full">
              <div className="flex justify-end">
                <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="fixed mt-8 h-full">
                <div className="px-12 py-4">
                  <a
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    href="/blog"
                  >
                    Blog
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="flex h-screen flex-col justify-between font-sans">
          {children}
          <footer>
            <div className="mt-16 flex flex-col items-center">
              <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div>© 2023</div>
                <div>•</div>
                <a href="/">{author} | Blog</a>
                <div>•</div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </body>
  );
};

export default Base;

import { Record } from "@leapcell/leapcell-js";
import * as dayjs from "dayjs";

const Main = ({
  records,
  category,
  query,
  author,
  avatar,
}: {
  records: Record[];
  category?: string;
  query?: string;
  author: string;
  avatar: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between space-y-4 mt-7">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="wave">👋🏻</span>, <span> I'm </span>
            <span className="text-sky-500 dark:text-teal-400">{author}</span>
          </h1>
          <p>Welcome to my blog - here I share everything that I love.</p>
        </div>
        <div className="rounded-full md:hidden shadow-lg">
          <img
            alt="avatar"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            src={avatar}
            className="h-50 w-50 rounded-full shadow-gray-300"
            style={{ color: "transparent" }}
          />
        </div>
        <img
          alt="avatar"
          loading="lazy"
          width="150"
          height="150"
          decoding="async"
          data-nimg="1"
          className="h-30 w-30 rounded-full hidden md:block shadow-lg shadow-gray-400"
          style={{ color: "transparent" }}
          src={avatar}
        />
      </div>
      <main className="mb-auto">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {category ? (
                <span className="text-sky-500 dark:text-teal-400 bg-sky-100 dark:bg-teal-900 rounded-md px-2 py-1 m-2">
                  Category:{" "}
                  <span className="text-sky-500 dark:text-teal-400">
                    {category}
                  </span>
                </span>
              ) : query ? (
                <span className="text-sky-500 dark:text-teal-400">
                  Search:{" "}
                  <span className="text-sky-500 dark:text-teal-400">
                    {query}
                  </span>
                </span>
              ) : (
                <span className="text-sky-500 dark:text-teal-400">
                  Latest posts
                </span>
              )}
            </h1>
            <div className="flex items-left justify-left pt-4">
              <div>
                <div className="pb-1 text-sm font-semibold text-gray-800 dark:text-gray-100">
                  search for posts
                </div>
                <form
                  className="flex flex-col sm:flex-row"
                  action="/search"
                  method="GET"
                >
                  <div>
                    <input
                      className="bg-white focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 border-gray-300 dark:border-gray-700 border-2 py-2"
                      style={{ color: "black" }}
                      id="query-input"
                      placeholder="Enter your query"
                      type="search"
                      name="query"
                    />
                  </div>
                  <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                    <button
                      className="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {records.map((record) => {
              const covers = record.fields["cover"] as string[];
              const cover = covers[0] || "";
              return (
                <li className="py-6">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time>
                            {dayjs
                              .unix(record.create_time)
                              .format("YYYY-MM-DD HH:mm:ss")}
                          </time>
                          <div className="py-2 pr-3">
                            {record.fields["cover"] && (
                              <img
                                alt="ReactJS vs NextJS"
                                loading="lazy"
                                width="215"
                                height="150"
                                decoding="async"
                                data-nimg="1"
                                className="object-cover object-center"
                                style={{ color: "transparent" }}
                                src={cover}
                              />
                            )}
                          </div>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <a
                                className="text-gray-900 dark:text-gray-100"
                                href={`/post/${record.record_id}`}
                              >
                                {record.fields["title"]}
                              </a>
                            </h2>
                            <div className="flex flex-wrap">
                              {(record.fields["category"] as string[]).map(
                                (category, idx) => (
                                  <a
                                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    href={`/category/${category}`}
                                    key={idx}
                                  >
                                    {category}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            <p>{record.fields["summary"]}</p>
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <a
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={`/post/${record.record_id}`}
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;

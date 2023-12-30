import { Record } from "@leapcell/leapcell-js";
import * as dayjs from "dayjs";

const Post = ({
  record,
  category,
  query,
  author,
  avatar,
    html,
}: {
  record: Record;
  category?: string;
  query?: string;
  author: string;
  avatar: string;
  html: string;
}) => {
  return (
    <div>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>
                    {dayjs.unix(record.create_time).format("YYYY-MM-DD")}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {record.fields["title"]}{" "}
              </h1>
            </div>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
          <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                <li className="flex items-center space-x-2">
                  <img
                    alt="avatar"
                    loading="lazy"
                    width="38"
                    height="38"
                    decoding="async"
                    data-nimg="1"
                    className="h-10 w-10 rounded-full"
                    style={{ color: "transparent" }}
                    src={avatar}
                  />
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900 dark:text-gray-100">
                      {author}
                    </dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd></dd>
                  </dl>
                </li>
              </ul>
            </dd>
          </dl>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <article className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </article>
          </div>
          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
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
              <div className="pt-4 xl:pt-8">
                <a
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                  href="/"
                >
                  ← Back to the blog
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Post;

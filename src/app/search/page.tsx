import Base from "@/component/base";
import { getPosts, searchPosts } from "@/component/fetch";
import Header from "@/component/header";
import Main from "@/component/main";
import { Metadata } from "next";
import Image from "next/image";

const author = process.env.AUTHOR || "Leapcell User";
const avatar = process.env.AVATAR || "https://leapcell.io/logo.png";

export const metadata: Metadata = {
  title: `${author}'s Blog`,
  description: "A blog about web development and programming",
  icons: [
    {
      href: avatar,
      sizes: "192x192",
      type: "image/png",
      url: avatar,
    },
    {
      href: avatar,
      sizes: "512x512",
      type: "image/png",
      url: avatar,
    },
  ],
};

export default async function Search({
  params,
  searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const query = searchParams["query"] as string;
  const records = await searchPosts(query);

  return (
    <main>
      <Header author={author} avatar={avatar} />
      <Base author={author} avatar={avatar}>
        <Main records={records} author={author} avatar={avatar} query={query} />
      </Base>
    </main>
  );
}

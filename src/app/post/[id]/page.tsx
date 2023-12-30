import Base from "@/component/base";
import { getPostById, getPosts, searchPosts } from "@/component/fetch";
import Header from "@/component/header";
import Main from "@/component/main";
import Post from "@/component/post";
import { Metadata } from "next";
import Image from "next/image";
import * as showdown from "showdown";

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

export default async function PostPage({
  params,
}: {
  params: {
    [key: string]: string;
  };
}) {
  const { id } = params;
  const record = await getPostById(id);
  const converter = new showdown.Converter();
  const html = converter.makeHtml(record.fields["content"] as string);

  return (
    <main>
      <Header author={author} avatar={avatar} />
      <Base author={author} avatar={avatar}>
        <Post record={record} author={author} avatar={avatar} html={html} />
      </Base>
    </main>
  );
}

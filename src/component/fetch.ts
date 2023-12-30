import { Leapcell } from "@leapcell/leapcell-js";

const api = new Leapcell({
  apiKey: process.env.LEAPCELL_API_KEY!,
});

const resource = process.env.RESOURCE || "issac/flask-blog";
const tableId = process.env.TABLE_ID || "tbl1738878922167070720";
const author = process.env.AUTHOR || "Leapcell User";
const avatar = process.env.AVATAR || "https://leapcell.io/logo.png";

const table = api.repo(resource).table(tableId);

export async function getPosts() {
  const res = await table.records.findMany();
  return res;
}

export async function getPostByCategory(category: string) {
  const res = await await table.records.findMany({
    where: {
      'category': {
        contain: category,
      },
    },
  });
  return res;
}

export async function searchPosts(keyword: string) {
  const res = await table.records.search({
    query: keyword,
    search_fields: ['title', 'content'],
  });
  return res;
}

export async function getPostById(id: string) {
  const res = await table.records.findById(id);
  return res;
}

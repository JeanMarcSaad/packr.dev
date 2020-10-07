import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export interface Blog {
  title: string;
  author: string;
  slug: string;
  date: string;
  content: string;
}

function mapEntryToBlog(entry: any, renderImages = false) {
  const date = new Date(entry.sys.createdAt);
  let renderedContent = "";
  if (renderImages) {
    const options = {
      renderNode: {
        "embedded-asset-block": (node: any) =>
          `<img src="${node.data.target.fields.file.url}"/>`
      }
    };
    renderedContent = documentToHtmlString(entry.fields.content, options);
  } else {
    renderedContent = documentToHtmlString(entry.fields.content);
  }

  return {
    title: entry.fields.title,
    author: entry.fields.author,
    slug: entry.fields.slug,
    date: date.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    content: renderedContent
  };
}

export async function getBlogsFromContentful() {
  const client = contentful.createClient({
    space: "r2u0d6cpoe4p",
    accessToken: process.env.VUE_APP_CONTENTFUL_API_TOKEN
  });
  const entries = await client.getEntries({
    // eslint-disable-next-line
    "content_type": "blogPost"
  });
  return entries;
}

export async function getBlog(slug: string) {
  const posts = await getBlogsFromContentful();
  const post = posts.items.filter((item: any) => {
    return item.fields.slug == slug;
  });
  if (post.length == 0) {
    return {
      title: "Page Not Found",
      author: "",
      slug: "",
      date: "",
      content: ""
    };
  } else {
    return mapEntryToBlog(post[0], true);
  }
}

export async function getBlogs(): Promise<Blog[]> {
  const posts = await getBlogsFromContentful();
  return posts.items.map((post: any) => {
    return mapEntryToBlog(post);
  });
}

import fs from 'fs';
import { compile } from 'mdsvex';

export const BLOG_PATH = 'src/routes/posts';

export const getPostsContent = (location) => {
  const posts = fs.readdirSync(location);
  const articles = [];

  posts.forEach((post) => {
    const contentPath = `${location}/${post}`;
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
      articles.push({ slug: post, content });
    }
  });
  return articles;
};


export const getPosts = async (postsContent, body = false) => {
  let result = postsContent.map(async (element) => {
    const { content, slug } = element;
    const transformedContent = await compile(content);
    const { published, lastUpdated, title, description } = transformedContent.data.fm;
    let resultElement = { published, lastUpdated, title, description, slug };
    if (body) {
      resultElement = { ...resultElement, body: transformedContent.code };
    }
    return resultElement;
  });
  result = await Promise.all(result);
  return result.sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
};

export const getPost = async (content, body = true) => {
  const transformedContent = await compile(content);
  const {
    published,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    title,
    description,
    twitterImage,
  } = transformedContent.data.fm;
  let result = {
    published,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    title,
    description,
    twitterImage,
  };
  if (body) {
    result = { ...result, body: transformedContent.code };
  }
  return result;
};

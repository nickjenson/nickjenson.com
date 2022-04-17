const url = 'https://nickjenson.com';
const title = 'Nick Jenson';
const desc = 'Portfolio and blog';

export const get = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('./posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.slice(2, -3);
			return { ...metadata, slug };
		})
	).then((posts) => {
		return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	});

	const body = render(posts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return {
		body,
		headers
	};
};

const render = (posts) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${title}</title>
      <description>${desc}</description>
      <link>${url}</link>
      <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
        ${posts.map((post) => `<item>
          <guid isPermaLink="true">${url}/blog/${post.slug}</guid>
          <title>${post.title}</title>
          <link>${url}/blog/${post.slug}</link>
          <description>${post.description}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>`).join('')}
    </channel>
  </rss>`;

import { expect, test } from '@playwright/test';

test('home page', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Nick Jenson');
	const locator = page.locator('a.button.primary');
	await expect(locator).toBeVisible();
	await expect(locator).toHaveAttribute('href', 'https://github.com/nickjenson');
});

test('about page', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe("Hi, I'm Nick!");
	const locator = page.locator("#memoji");
	await expect(locator).toHaveAttribute('alt', 'Nick\'s Memoji');
	await expect(locator).toHaveAttribute('src', '/images/memoji.png');
});

test('can fetch posts API', async ({ page }) => {
	const response = await page.request.get('/api/posts.json');
	expect(response).toBeOK();
	const body = await response.json();
	expect(body[0].meta.layout).toBe('posts');
});

import { test, expect } from "@playwright/test";

test("should navigate to the users page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const mainUsersLink = page.locator('[data-testid="main-users-link"]');

  await mainUsersLink.click();

  await expect(page).toHaveURL("http://localhost:3000/users");
});

test("should navigate to add user page", async ({ page }) => {
  await page.goto("http://localhost:3000/users");
  const addUserButton = page.locator('a:has-text("Dodaj")');
  await addUserButton.click();
  await expect(page).toHaveURL("http://localhost:3000/users/create");
});

test("should open the action menu for first user", async ({ page }) => {
  await page.goto("http://localhost:3000/users");

  const menuButton = page.locator(
    `tr:nth-child(${1}) button[aria-haspopup="menu"]`
  );
  await menuButton.click();

  const editOption = page.locator("text=Edytuj użytkownika");
  await expect(editOption).toBeVisible();
});

import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/test.fixture';


const{Given,When,Then} = createBdd(test);


Given('the user navigates to the Todo application', async ({ todoPage }) => {
  await todoPage.navigate();
});

When('the user adds a todo item{string}',async({todoPage},todoText)=>{
  await todoPage.addToDo(todoText);
});

Then('the todo {string} should be displayed',async({todoPage},todoText)=>{
  await expect(
     todoPage.page.locator('.todo-list li',{hasText : todoText})

  ).toBeVisible();
});

Then('the todo count should be{int}',async({todoPage},count)=>{
  await expect(
     todoPage.page.locator('.todo-list li')).toHaveCount(count);
});

When('the user marks the todo item as complted', async({todoPage})=>{
  await todoPage.markCompleted(0);
});

Then('the todo item should be marked as complted', async({todoPage},count)=>{
  await expect(
     todoPage.page.locator('.todo-list li').first()
    ).toHaveClass(/completed/);
});


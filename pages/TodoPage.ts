import{Page,Locator} from '@playwright/test';

export class TodoPage{
    readonly page : Page;
    readonly newTodo : Locator;
    readonly todoItems : Locator;

    constructor(page: Page){
        this.page=page;
        this.newTodo = page.locator('.new-todo');
        this.todoItems = page.locator(".todo-list li");
    }

    async navigate(){
        await this.page.goto('https://todomvc.com/examples/angular/dist/browser/#/all');
    }

    async addToDo(task:string){
        await this.newTodo.fill(task);
        await this.newTodo.press('Enter');
    }

    async getTodoCount(){
        return await this.todoItems.count();
    }

    async markCompleted(index: number){
        await this.page.locator('.toggle').nth(index).check();
    }

}
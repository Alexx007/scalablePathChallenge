
import {Page, Locator} from '@playwright/test'

export class LoginPage{

    private userName:Locator;
    private password:Locator;
    private loginBtn:Locator;
     page:Page;
    constructor(page: Page){
        this.page = page;
        this.userName = this.page.locator('#user-name');
        this.password = this.page.locator('#password');
        this.loginBtn = this.page.locator('#login-button');
    }

    async navigate(){
       await  this.page.goto('/');
    }

    async Login(userName:string,password:string){
        await this.page.waitForLoadState('domcontentloaded');
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click()
    }




}
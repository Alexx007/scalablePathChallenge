
import {expect, test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { log } from 'console';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Scable Live coding Challenge', async() =>{

    test('login successfull and add product to cart', async({page}) =>{
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const PRODUCT_NAME = 'Sauce Labs Backpack';

        await  loginPage.navigate();
        await loginPage.Login('standard_user','secret_sauce');
        await expect( page.locator('.inventory_list')).toBeVisible();
        await productPage.selectProduct(PRODUCT_NAME);
        await productPage.validateProductAdded(PRODUCT_NAME);
        
    
    })
})
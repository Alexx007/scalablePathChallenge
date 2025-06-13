import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ProductPage{
    private page:Page;
    private productList:Locator;
    private cartBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.productList =  this.page.locator('.inventory_item');
        this.cartBtn = this.page.locator('#shopping_cart_container')
    }

    async selectProduct(productName:string){
        const selectedproduect = this.productList.filter({ hasText:productName});
        await selectedproduect.locator('#add-to-cart-sauce-labs-backpack').click();
        await this.page.waitForLoadState('networkidle');

    }

    async validateProductAdded(productName:string){
        await this.cartBtn.click();
        await this.page.locator('.cart_list').waitFor();
        const productAdded = await this.page.locator('.inventory_item_name').textContent();
         expect(productAdded).toBe(productName);
    }
}
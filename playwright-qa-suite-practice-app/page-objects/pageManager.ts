import { Page } from "@playwright/test";
import { FormLayoutsPage } from "../page-objects/formLayoutsPage";
import { NavigationPage } from "../page-objects/navigationPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutsPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
  }

  //need to create the methods that will return all the instances of the page objects
  onNavigationPage() {
    return this.navigationPage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }
}

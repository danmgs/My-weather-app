import { MyWebAppPage } from './app.po';

describe('my-web-app App', () => {
  let page: MyWebAppPage;

  beforeEach(() => {
    page = new MyWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

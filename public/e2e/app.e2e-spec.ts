import { MyWeatherAppPage } from './app.po';

describe('my-weather-app App', () => {
  let page: MyWeatherAppPage;

  beforeEach(() => {
    page = new MyWeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

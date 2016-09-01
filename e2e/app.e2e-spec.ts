import { GenieWebPage } from './app.po';

describe('genie-web App', function() {
  let page: GenieWebPage;

  beforeEach(() => {
    page = new GenieWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

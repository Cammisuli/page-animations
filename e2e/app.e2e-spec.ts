import { PageAnimationsPage } from './app.po';

describe('page-animations App', function() {
  let page: PageAnimationsPage;

  beforeEach(() => {
    page = new PageAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

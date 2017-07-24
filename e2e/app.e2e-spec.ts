import { ModernBusinessBsFourPage } from './app.po';

describe('modern-business-bs-four App', () => {
  let page: ModernBusinessBsFourPage;

  beforeEach(() => {
    page = new ModernBusinessBsFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mb works!');
  });
});

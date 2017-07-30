import { Ng4Ess1Page } from './app.po';

describe('ng4-ess1 App', () => {
  let page: Ng4Ess1Page;

  beforeEach(() => {
    page = new Ng4Ess1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

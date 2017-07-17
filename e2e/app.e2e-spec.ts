import { NewfinalProjectPage } from './app.po';

describe('newfinal-project App', function() {
  let page: NewfinalProjectPage;

  beforeEach(() => {
    page = new NewfinalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AnkitTestPage } from './app.po';

describe('ankit-test App', () => {
  let page: AnkitTestPage;

  beforeEach(() => {
    page = new AnkitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { HelloUniPage } from './app.po';

describe('hello-uni App', function() {
  let page: HelloUniPage;

  beforeEach(() => {
    page = new HelloUniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

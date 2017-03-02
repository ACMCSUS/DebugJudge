import { DebugjudgeappPage } from './app.po';

describe('debugjudgeapp App', function() {
  let page: DebugjudgeappPage;

  beforeEach(() => {
    page = new DebugjudgeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

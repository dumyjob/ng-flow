import { Ng2FlowPage } from './app.po';

describe('ng2-flow App', function() {
  let page: Ng2FlowPage;

  beforeEach(() => {
    page = new Ng2FlowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

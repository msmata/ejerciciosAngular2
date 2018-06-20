import { EjemploRoutingPage } from './app.po';

describe('ejemplo-routing App', function() {
  let page: EjemploRoutingPage;

  beforeEach(() => {
    page = new EjemploRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

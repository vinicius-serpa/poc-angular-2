import { ProductsUiPage } from './app.po';

describe('products-ui App', function() {
  let page: ProductsUiPage;

  beforeEach(() => {
    page = new ProductsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

describe('Visit NotFound error page', () => {
  it('successfully loads', ()=> {
    cy.visit('/notfound')
  });
})


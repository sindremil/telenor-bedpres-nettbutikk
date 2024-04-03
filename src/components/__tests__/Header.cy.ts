import HelloWorld from '../Header.vue';

describe('Header', () => {
  it('mounts', () => {
    cy.mount(HelloWorld);
  });

  it('renders properly', () => {
    cy.mount(HelloWorld);
    cy.contains('My Super Pro Store');
  });
});

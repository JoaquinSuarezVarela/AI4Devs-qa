// cypress/integration/recruiterDashboard.spec.js
describe('Recruiter Dashboard', () => {
  beforeEach(() => {
    // Suponiendo que la URL de la aplicación es 'http://localhost:3000'
    cy.visit('http://localhost:3000');
  });

  it('should display the position title correctly', () => {
    cy.get('[data-cy=position-title]').should('be.visible').and('contain', 'Position');
  });

  it('should display the Añadir Candidato section', () => {
    cy.get('[data-cy=add-candidate-card]').should('be.visible');
    cy.get('[data-cy=add-candidate-title]').should('contain', 'Añadir Candidato');
    cy.get('[data-cy=add-candidate-button]').should('be.visible').and('contain', 'Añadir Nuevo Candidato');
  });

  it('should display the Ver posiciones section', () => {
    cy.get('[data-cy=view-positions-card]').should('be.visible');
    cy.get('[data-cy=view-positions-title]').should('contain', 'Ver posiciones');
    cy.get('[data-cy=view-positions-button]').should('be.visible').and('contain', 'Ir a Posiciones');
  });

  // Aquí se pueden agregar más pruebas E2E en el futuro
});
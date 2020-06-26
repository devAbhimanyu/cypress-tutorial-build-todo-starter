Cypress.Commands.add("loadDataAtInit", (initData = "fixture:todos") => {
  cy.server();
  cy.route("GET", "/api/todos", initData);
  cy.visit("/");
});

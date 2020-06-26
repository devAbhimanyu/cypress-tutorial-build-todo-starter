describe("App Initial load", () => {
  it("Load todos on page load", () => {
    cy.loadDataAtInit();
    cy.get('[data-e2e="todo-list"] li').should("have.length", 4);
  });

  it.only("Todo get error", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/todos",
      status: 500,
      response: {},
    });

    cy.visit("/");
    cy.get('[data-e2e="todo-list"] li').should("not.exist");

    cy.get(".error").should("be.visible");
  });
});

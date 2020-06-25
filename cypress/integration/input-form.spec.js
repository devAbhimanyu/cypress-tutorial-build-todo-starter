describe("New ToDo Input Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Base input Test", () => {
    it("focusses input box", () => {
      cy.focused().should("have.class", "new-todo");
    });

    it("enter todo item", () => {
      const inText = "Buy books";
      cy.get('[data-e2e="newTodo-item"]')
        .type(inText)
        .should("have.value", inText);
    });
  });
});

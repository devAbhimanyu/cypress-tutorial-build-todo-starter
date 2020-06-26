describe("New ToDo Input Test", () => {
  beforeEach(() => {
    cy.loadDataAtInit([]);
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

  context("Form Submission using enter key", () => {
    beforeEach(() => {
      cy.server();
    });
    it("submits todo item", () => {
      const inText = "Buy Pens";
      cy.route("POST", "/api/todos", {
        id: 1,
        desc: inText,
        isComlete: false,
      });

      cy.get('[data-e2e="newTodo-item"]')
        .type(inText)
        .type("{enter}")
        .should("have.value", "");

      cy.get('[data-e2e="todo-list"]')
        .should("have.length", 1)
        .and("contain", inText);
    });

    it("new item error", () => {
      cy.route({
        method: "POST",
        url: "/api/todos",
        status: 500,
        response: {},
      });

      cy.get('[data-e2e="newTodo-item"]').type("{enter}");

      cy.get('[data-e2e="todo-list"] li').should("not.exist");

      cy.get(".error").should("be.visible");
    });
  });
});

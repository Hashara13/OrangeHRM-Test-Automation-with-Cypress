/// <reference types="Cypress"/>

// File Upload
it("Upload", function () {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("One.txt");
});

// File Download
it.only("Download", function () {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
  });

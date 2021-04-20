/// <reference types="cypress" />
describe('Check Signin flow', () => {

  beforeEach(() => {
    cy.setCookie('jToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ODgzMGIzNy1mMzAyLTQyYjItODEzYS1hMjM0ZmIzMmRiZmQiLCJkb21haW5JZCI6IjkwOTMiLCJpYXQiOjE2MDY5MjYwNjYsInJvbGUiOiJhdWRpZW5jZSIsImlzcyI6InB1Ym5pbmphX3VzZXJfc2VydmljZSJ9.cPXlOPmajew11U1agPTBhcMD2jGAL1kD6Ixgw-_P-bM');
  });

  it('Signin', () => {
    cy.visit('https://pubninja.academy/', { failOnStatusCode: false });
    cy.scrollTo('center');
    cy.xpath("//a[@class='header-link transparent-actions primary-button']").click();
    cy.wait(500);
  })

  it('Enroll: Christmas Theme Storytelling: The Story of Christmas', () => {
    cy.xpath("//*[contains(text(),'Christmas Theme Storytelling: The Story of Christmas')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Creative writing with DISNEY TOONS: Creative Writing Using Disney Theme (Advance level)', () => {
    cy.xpath("//*[contains(text(),'Creative writing with DISNEY TOONS: Creative Writing Using Disney Theme (Advance level)')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Pottery and Clay Modelling For Kids: Learn Pot Making and Clay Modelling', () => {
    cy.xpath("//*[contains(text(),'Pottery and Clay Modelling For Kids: Learn Pot Making and Clay Modelling')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);cy.wait(500);

  })

  it('Enroll: Learn How to play Ukulele - Music Class for Kids', () => {
    cy.xpath("//*[contains(text(),'Learn How to play Ukulele - Music Class for Kids')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Make Puppets of Disney Characters Elsa and Olaf: Story of Frozen', () => {
    cy.xpath("//*[contains(text(),'Make Puppets of Disney Characters Elsa and Olaf: Story of Frozen')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Chess For Kids: The Chess Class for Beginners', () => {
    cy.xpath("//*[contains(text(),'Chess For Kids: The Chess Class for Beginners')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Globe Trotting : Learn About Seven Continents', () => {
    cy.xpath("//*[contains(text(),'Globe Trotting : Learn About Seven Continents')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  //Free Trail Class 
  it('Enroll: Learn Scratch Programming : Become A Junior Game Developer', () => {
    cy.xpath("//*[contains(text(),'Learn Scratch Programming : Become A Junior Game Developer')]").click();
    cy.xpath("//div[@id='trial-access-button']").click();
    cy.wait(500);
    cy.xpath("//button[@id='get-trial-access']").click();
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Flameless Cooking For Kids: Christmas Cakes, Cakesicles & More', () => {
    cy.xpath("//*[contains(text(),'Flameless Cooking For Kids: Christmas Cakes, Cakesicles & More')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Improve Your Handwriting : Cursive and Printed Writing', () => {
    cy.xpath("//*[contains(text(),'Improve Your Handwriting : Cursive and Printed Writing')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  //Paid Class
  xit('Enroll: Learn Pen and Ink Drawing: Draw a vintage door', () => {
    cy.xpath("//*[contains(text(),'Learn Pen and Ink Drawing: Draw a vintage door')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Baking: Make your own cake', () => {
    cy.xpath("//*[contains(text(),'Learn Baking: Make your own cake')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn To Draw Yourself: Step by step guide to draw self portrait', () => {
    cy.xpath("//*[contains(text(),'Learn To Draw Yourself: Step by step guide to draw self portrait')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Sketchnoting', () => {
    cy.xpath("//*[contains(text(),'Learn Sketchnoting')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Acro Yoga: Acro Yoga for Parent and Child', () => {
    cy.xpath("//*[contains(text(),'Learn Acro Yoga: Acro Yoga for Parent and Child')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Creative Writing With Disney Toons: Creative writing using disney theme', () => {
    cy.xpath("//*[contains(text(),'Learn Creative Writing With Disney Toons: Creative writing using disney theme')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn How To Write A Diary: Learn Writing Through Building Paper Planes', () => {
    cy.xpath("//*[contains(text(),'Learn How To Write A Diary: Learn Writing Through Building Paper Planes')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Faux Calligraphy - Improve Your Handwriting', () => {
    cy.xpath("//*[contains(text(),'Learn Faux Calligraphy - Improve Your Handwriting')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Interactive English Language Classes with Music', () => {
    cy.xpath("//*[contains(text(),'Interactive English Language Classes with Music')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Creative writing: Improve Spellings and Vocabulary', () => {
    cy.xpath("//*[contains(text(),'Learn Creative writing: Improve Spellings and Vocabulary')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Fashion Sketches: Sketch Your Dress Designs', () => {
    cy.xpath("//*[contains(text(),'Learn Fashion Sketches: Sketch Your Dress Designs')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  //Free Trial Class
  it('Enroll: Learn Brush Pen Calligraphy - Art of Beautiful Writing', () => {
    cy.xpath("//*[contains(text(),'Learn Brush Pen Calligraphy - Art of Beautiful Writing')]").click();
    cy.xpath("//div[@id='trial-access-button']").click();
    cy.wait(500);
    cy.xpath("//button[@id='get-trial-access']").click();
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Teabag Folding Art / Paper Medallions', () => {
    cy.xpath("//*[contains(text(),'Teabag Folding Art / Paper Medallions')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Blogging & Mindfulness: Writing and Meditation', () => {
    cy.xpath("//*[contains(text(),'Learn Blogging & Mindfulness: Writing and Meditation')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Tenses: The art of sentence formation', () => {
    cy.xpath("//*[contains(text(),'Learn Tenses: The art of sentence formation')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Storytelling: Improve vocabulary, pronunciation and problem solving skills!', () => {
    cy.xpath("//*[contains(text(),'Storytelling: Improve vocabulary, pronunciation and problem solving skills!')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })


  it('Enroll: Public speaking for kids: say goodbye to your hesitation', () => {
    cy.xpath("//*[contains(text(),'Public speaking for kids: say goodbye to your hesitation')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Cotton Swab Painting', () => {
    cy.xpath("//*[contains(text(),'Learn Cotton Swab Painting')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Disney Characters & Doodling', () => {
    cy.xpath("//*[contains(text(),'Disney Characters & Doodling')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Make your own Chhota Bheem Puppet with Storytelling', () => {
    cy.xpath("//*[contains(text(),'Make your own Chhota Bheem Puppet with Storytelling')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Mindfulness for kids: Healthy Mind Healthy Body', () => {
    cy.xpath("//*[contains(text(),'Mindfulness for kids: Healthy Mind Healthy Body')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Confidence building for master kids: Stand out in a crowd', () => {
    cy.xpath("//*[contains(text(),'Confidence building for master kids: Stand out in a crowd')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  //Free Trial Class
  it('Enroll: English Phonics for little masters', () => {
    cy.xpath("//*[contains(text(),'English Phonics for little masters')]").click();
    cy.xpath("//div[@id='trial-access-button']").click();
    cy.wait(500);
    cy.xpath("//button[@id='get-trial-access']").click();
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learn Social Etiquette: Kids at their best behaviour', () => {
    cy.xpath("//*[contains(text(),'Learn Social Etiquette: Kids at their best behaviour')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Learning Self-Care Skills for Kids', () => {
    cy.xpath("//*[contains(text(),'Learning Self-Care Skills for Kids')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })

  it('Enroll: Painting for kids: Add colors to your childhood', () => {
    cy.xpath("//*[contains(text(),'Painting for kids: Add colors to your childhood')]").click();
    cy.xpath("//div[@id='loginlogoutid']").last().click();
    cy.wait(500);
    cy.xpath("//button[@id='create-team-cta']").click({ force: true });
    cy.wait(1500);
    cy.go('back');
    cy.wait(500);
  })



})

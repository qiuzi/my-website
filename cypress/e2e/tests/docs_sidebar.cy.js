describe('Verifying that the Account Management Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('Account Management')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("Account Management")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)
        cy.get('a.menu__link')
          .contains("Account Management")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)
      })
})

describe('Open Setup Tab under Account Management', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Account Management")
      .click()
    cy.get('a.menu__link')
      .contains('Setup')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Setup")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Setup")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })

}) 

describe('Verifying that the Numbers Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('Numbers')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("Numbers")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)  
        cy.get('a.menu__link')
          .contains("Numbers")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)  
      })
})

describe('Open Webhooks Tab under Numbers', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Numbers")
      .click()
    cy.get('a.menu__link')
      .contains('Webhooks')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })

}) 

describe('Open Guides and Tutorials Tab under Numbers', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Numbers")
      .click()
    cy.get('a.menu__link')
      .contains('Guides and Tutorials')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Verifying that the Voice Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('Voice')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("Voice")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)  
        cy.get('a.menu__link')
          .contains("Voice")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)  
      })
})    

describe('Open Webhooks Tab under Voice', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Voice")
      .click()
    cy.get('a.menu__link')
      .contains('Webhooks')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open BXML Tab under Voice', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Voice")
      .click()
    cy.get('a.menu__link')
      .contains('BXML')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("BXML")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("BXML")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open Guides and Tutorials Tab under Voice', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Voice")
      .click()
    cy.get('a.menu__link')
      .contains('Guides and Tutorials')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Verifying that the Messaging Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('Messaging')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("Messaging")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)  
        cy.get('a.menu__link')
          .contains("Messaging")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)  
      })
}) 

describe('Open Guides and Tutorials Tab under Messaging', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Messaging")
      .click()
    cy.get('a.menu__link')
      .contains('Guides and Tutorials')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open Campaign Management Tab under Messaging', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Messaging")
      .click()
    cy.get('a.menu__link')
      .contains('Campaign Management')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Campaign Management")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Campaign Management")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open 10DLC CSP Campaigns Tab under Campaign Management', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Messaging")
      .click()
    cy.get('a.menu__link')
      .contains("Campaign Management")
      .click()      
    cy.get('a.menu__link')
      .contains('10DLC CSP Campaigns')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("10DLC CSP Campaigns")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("10DLC CSP Campaigns")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open 10DLC Campaign Imports Tab under Campaign Management', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Messaging")
      .click()
    cy.get('a.menu__link')
      .contains("Campaign Management")
      .click()            
    cy.get('a.menu__link')
      .contains('10DLC Campaign Imports')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("10DLC Campaign Imports")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("10DLC Campaign Imports")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Verifying that the WebRTC Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('WebRTC')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("WebRTC")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)  
        cy.get('a.menu__link')
          .contains("WebRTC")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)  
      })
})    

describe('Open Guides and Tutorials Tab under WebRTC', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("WebRTC")
      .click()
    cy.get('a.menu__link')
      .contains('Guides and Tutorials')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Guides and Tutorial")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Verifying that the Multi-Factor Authentication Tab opens and closes', () => {
  it('Should verify that clicking a tab opens and closes the submenu', () => {
      cy.visit('/docs')
      cy.get('a.menu__link')
        .contains('Multi-Factor Authentication')
        .should('have.attr', 'aria-expanded') 
        .and('match', /false/)        
      cy.get('a.menu__link')
        .contains("Multi-Factor Authentication")
        .click()
        .should('have.attr', 'aria-expanded') 
        .and('match', /true/)  
      cy.get('a.menu__link')
        .contains("Multi-Factor Authentication")
        .click()
        .should('have.attr', 'aria-expanded') 
        .and('match', /false/)  
    })
})    

describe('Open Webhooks Tab under Multi-Factor Authentication', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Multi-Factor Authentication")
      .click()
    cy.get('a.menu__link')
      .contains('Webhooks')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Webhooks")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Verifying that the Emergency Services Tab opens and closes', () => {
    it('Should verify that clicking a tab opens and closes the submenu', () => {
        cy.visit('/docs')
        cy.get('a.menu__link')
          .contains('Emergency Services')
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)        
        cy.get('a.menu__link')
          .contains("Emergency Services")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /true/)  
        cy.get('a.menu__link')
          .contains("Emergency Services")
          .click()
          .should('have.attr', 'aria-expanded') 
          .and('match', /false/)  
      })
})    

describe('Open Bandwidth Dashboard Tab under Emergency Services', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Emergency Services")
      .click()
    cy.get('a.menu__link')
      .contains('Bandwidth Dashboard')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("Bandwidth Dashboard")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("Bandwidth Dashboard")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
}) 

describe('Open 911 Access Dashboard Tab under Emergency Services', () => {
  it('tests the submenu',() => {
    cy.visit('/docs')
    cy.get('a.menu__link')
      .contains("Emergency Services")
      .click()
    cy.get('a.menu__link')
      .contains('911 Access Dashboard')
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains("911 Access Dashboard")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains("911 Access Dashboard")
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)    
    })
})

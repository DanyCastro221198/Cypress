describe('Login no trello, cadastro de bord', () => {
  beforeEach(() => {
  })

      it('Cadastrar um quadro board', () => {    
          cy.request({
              method: 'POST',
              url:'https://api.trello.com/1/boards/?name=QuadroDany&key=fcb491c8814e7f6ee7c3591a8de9d2db&token=ATTA9e4eb3aca981116b717c9987e32add20f6bcb70f18c5ba1c85843deae728e6a20CB239D2',
            }).then((res)=>{
            expect(res.status).to.be.equal(200)
           })
          })
      it('Criar card', () => {    
       cy.request({
              method: 'POST',
              url:'https://api.trello.com/1/cards?idList=64a59688df5f52b48594e104&key=fcb491c8814e7f6ee7c3591a8de9d2db&token=ATTA9e4eb3aca981116b717c9987e32add20f6bcb70f18c5ba1c85843deae728e6a20CB239D2',
              }).then((res)=>{
              expect(res.status).to.be.equal(200) 
          })
      })
      it('Delete card', () => {    
          cy.request({
              method:'DELETE',
              url:'https://api.trello.com/1/cards/64a6ecf47591eadf75c4d3fe?key=fcb491c8814e7f6ee7c3591a8de9d2db&token=ATTA9e4eb3aca981116b717c9987e32add20f6bcb70f18c5ba1c85843deae728e6a20CB239D2',
              }).then((res)=>{
              expect(res.status).to.be.equal(200) 
             })
 
  })      
      it('Delete Bord', () => {    
          cy.request({
             method:'DELETE',
             url:'https://api.trello.com/1/boards/zO3B96hq?key=fcb491c8814e7f6ee7c3591a8de9d2db&token=ATTA9e4eb3aca981116b717c9987e32add20f6bcb70f18c5ba1c85843deae728e6a20CB239D2',
             }).then((res)=>{
             expect(res.status).to.be.equal(200) 
         })
      })
})

      

     








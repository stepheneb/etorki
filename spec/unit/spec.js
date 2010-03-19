describe 'Etorki'

  describe 'toggleHandler()'

    before_each
      $('body').append('<div id="test">');
      $('#test').append(fixture('comment-sample'));
      // Env.js will consider all elements as :hidden until an explicit height is assigned to them
      $('#test .expandable .body').css('height', '1px');   
      
      // everything below here is expected to happen in document.ready
      $('#test .expandable .title').click(toggleHandler);   // add toggleHandler
      $('#test .expandable .body').hide();                  // hide all comment bodies
    end

    after_each
      $('#test').remove();
    end
    
    it 'hides .expandables .body elements at the start'
      $('.expandable .body').should.be_hidden();
    end
    
    it 'shows hidden .expandables .body elements when .titles are clicked'
      $('.expandable .body').should.be_hidden();
      $('.expandable .title').click();
      $('.expandable .body').should.be_visible();
    end

    it 'hides visible .expandables .body elements when .expandables .titles are clicked'
      $('.expandable .body').show();
      $('.expandable .body').should.be_visible();
      $('.expandable .title').click();
      $('.expandable .body').should.be_hidden();
    end
    
    it 'Reveals only the .body element whose .title is clicked'
      $('.expandable .body').should.be_hidden;
      $('.expandable .title:first').click();
      $('.expandable .body:first').should.be_visible;
      $('.expandable .body:eq(1)').should.be_hidden;
    end
    
    describe 'bindToggleHandler()'

      it 'should bind the toggle handler to elements with class .expandables'
      
       //simplest form
       
       
      end
    end
    
    
  end
end


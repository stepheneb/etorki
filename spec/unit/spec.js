describe 'Etorki'

    before_each
      $('body').append('<div id="test">');
      $('#test').append(fixture('comment-sample'));
      // Env.js will consider all elements as :hidden until an explicit height is assigned to them
      $('#test .expandable .body').css('height', '1px');   
      
      // everything below here is expected to happen in document.ready
      init();             
    end

    after_each
      $('#test').remove();
    end
    
    it 'hides .expandable .body elements at the start'
      $('#etorki_body_element_1').should.be_hidden();
    end
    
    it 'shows hidden .expandable .body elements when .titles are clicked'
      $('#etorki_body_element_1').should.be_hidden();
      $('#etorki_title_element_1').click();
      $('#etorki_body_element_1').should.be_visible();
    end

    it 'hides visible .expandable .body elements when .expandables .titles are clicked'
      $('#etorki_body_element_1').show();
      $('#etorki_body_element_1').should.be_visible();
      $('#etorki_title_element_1').click();
      $('#etorki_body_element_1').should.be_hidden();
    end
    
    it 'Reveals only the .body element whose .title is clicked'
      $('#etorki_body_element_1').should.be_hidden;
      $('#etorki_body_element_2').should.be_hidden;
      $('#etorki_title_element_1').click();
      $('#etorki_body_element_1').should.be_visible;
      $('#etorki_body_element_2').should.be_hidden;
    end
    
    describe 'bindToggleHandler()'

      it 'should bind the toggle handler to elements with class .expandables'
      
       //simplest form
       
       
      end
    end
end


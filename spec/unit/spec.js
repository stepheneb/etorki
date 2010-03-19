describe 'jQuery.fn.toggle()'
  before_each
    $('body').append("<div id='test'>");
    $('#test').append("<p id='toggled' style='height: 1px'>Some text.</p>");
  end

  after_each
    $('#test').remove();
  end

  describe '#toggled'
    it 'should be visible by default'
      $('#toggled').should.be_visible
    end
  end
  
  it 'should toggle visibility after show()'
    $('#toggled').show();
    $('#toggled').should.be_visible;
    $('#toggled').toggle();
    $('#toggled').should.be_hidden;
  end

  it 'should toggle visibility after hide()'
    $('#toggled').hide();
    $('#toggled').should.be_hidden;
    $('#toggled').toggle();
    $('#toggled').should.be_visible;
  end

  it 'should toggle visibility after toggle()'
    $('#toggled').toggle();
    $('#toggled').should.be_hidden;
    $('#toggled').toggle();
    $('#toggled').should.be_visible;
    $('#toggled').toggle();
    $('#toggled').should.be_hidden;
  end
end


describe 'Etorki'
  describe 'toggleHandler()'

    before_each
      $('body').append('<div id="test">');
      $('#test').append(fixture('comment-sample'));
      // Env.js will consider all elements as :hidden until an explicit height is assigned to them
      $('#test .body').css('height', '1px');   
      
      // everything below here is expected to happen in document.ready
      $('#test .title').click(toggleHandler);   // add toggleHandler
      $('#test .body').hide();                  // hide all comment bodies
    end

    after_each
      $('#test').remove();
    end

    it 'Shows hidden .body elements when .titles are clicked'
      $('.body').should.be_hidden();
      $('.title').click();
      $('.body').should.be_visible();
    end

    it 'Hides visible .body elements when .titles are clicked'
      $('.body').show();
      $('.body').should.be_visible();
      $('.title').click();
      $('.body').should.be_hidden();
    end
    
    it 'hides only the .body element whose .title is clicked'
      $('.body').should.be_hidden;
      $('.title:first').click();
      $('.body:first').should.be_visible;
      $('.body:eq(1)').should.be_hidden;
    end
    
  end
end
describe 'jQuery.fn.toggle()'
  before_each
    $('body').append("<div id='test'>");
    $('#test').append("<p id='toggled' style='height: 1px'>Some text.</p>");
  end

  after_each
    $('#test').remove();
  end

  describe 'toggled'
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
      $('.expandable .body').should.be_hidden();
      $('.expandable .title').click();
      $('.expandable .body').should.be_visible();
    end

    it 'Hides visible .body elements when .titles are clicked'
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
    
  end
end
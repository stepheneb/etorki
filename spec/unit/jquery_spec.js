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
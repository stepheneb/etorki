
describe 'Comments'
  describe '.showingAndHiding()'
    before_each
	$('body').append("<div id='test'>");
		$('#test').append(fixture('comment-sample'));
      $expandables = $('.expandable');
    end

	after_each
		$('#test').html('');
    end
    
    it 'should show a hidden body'
		$expandables.each(function () {
			$(this).find('.body').hide();
			$(this).find('.body').should.be_hidden();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_visible();
		});
    end
	it 'should hide a visible body'
		$expandables.each(function () {
			$(this).find('.body').show();
			$(this).find('.body').should.be_visible();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_hidden();
		});
    end
  end
end
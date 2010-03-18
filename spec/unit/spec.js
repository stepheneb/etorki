
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
    
    it 'clicking title should show a hidden body'
		$expandables.each(function () {
			$(this).find('.title').click(toggleHandler);
			$(this).find('.body').hide();
			$(this).find('.body').should.be_hidden();
			$(this).find('.title').click();
			$(this).find('.body').should.be_visible();
		});
    end
	it 'clicking title should hide a visible body'
		$expandables.each(function () {
			$(this).find('.title').click(toggleHandler);
			$(this).find('.body').should.be_visible();
			$(this).find('.title').click();
			$(this).find('.body').should.be_hidden();
		});
    end
  end
end
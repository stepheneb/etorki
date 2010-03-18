
describe 'Comments'
  describe '.showingAndHiding()'
    before_each
      $comment_sample = $(fixture('comment-sample'));
      $expandables = $comment_sample.find('.expandable');
    end
    
    it 'should show a hidden body'
		$expandables.each(function () {
			$(this).find('.body').hide();
			$(this).find('.body').should.be_hidden();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_visible();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_hidden();
		});
    end
	it 'should hide a visible body'
		$expandables.each(function () {
			$(this).find('.body').hide();
			$(this).find('.body').show();
			$(this).find('.body').should.be_visible();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_hidden();
		});
    end
  end
end
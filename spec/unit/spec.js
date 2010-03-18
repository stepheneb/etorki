
describe 'Comments'
  describe '.showingAndHiding()'
    it 'should show a hidden body'
		$(fixture('comment-sample')).find('.expandable').each(function (){
			$(this).find('.body').hide();
			$(this).find('.body').should.be_hidden();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_visible();
		});
    end
	it 'should hide a visible body'
		$(fixture('comment-sample')).find('.expandable').each(function (){
			$(this).find('.body').show();
			$(this).find('.body').should.be_visible();
			toggleBody($(this).find('.title'));
			$(this).find('.body').should.be_hidden();
		});
    end
  end
end
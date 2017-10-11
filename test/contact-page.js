describe('Contact Us Page', function() {
    it('should have a Contact Us link on the homepage', function() {
        browser.url('/');
        var hasContactLink = browser.isExisting('=CONTACT US');
        expect(hasContactLink).toBe(true);
    });
    describe('Valid contact Submission',function() {
      it('should submit a message with contact details', function() {
        browser.url('/');
        browser.click('=CONTACT US');
        browser.setValue('[name="your-name"]','J.Bloggs');
        browser.setValue('[name="your-message"]','please contact me I want to find out more');
        browser.setValue('[name="your-company"]','test automation');
        browser.setValue('[name="your-email"]','j.Bloggs@qaworks.com');
        var submission = browser.submitForm('#contact-us-send');
        expect(submission.state).toBe('success');
      });
    });
});

describe('Contact Us Page', function() {

    it('should have a Contact Us link on the homepage', function() {
        browser.url('/');
        var hasContactLink = browser.isExisting('=CONTACT US');
        expect(hasContactLink).toBe(true);
    });

});

describe('A suite', function() {
	it('contains spec with an expectation', function() {
		expect(true).toBe(true);
	});
});

describe('window height', function() {
	it('returns window height', function() {
		expect(getWindowHeight()).toEqual(jasmine.any(Number));
	});
});
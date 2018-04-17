describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
   fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('divisible by 3 and 5', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('not divisible by 3 and 5', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  
    it('not divisible by 3 and 5', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });

  });

});

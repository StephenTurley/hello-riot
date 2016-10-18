describe('foo', function(){
  var tag;

  var model = riot.observable();
  model.name = 'bob';

  beforeEach(function(){
    var html = document.createElement('foo')
    document.body.appendChild(html)
    tag = riot.mount('foo', model);
  });

  afterEach(function(){
    tag[0].unmount();
  });


  it('it should display the name from the api', function(){
    var result = document.querySelector('foo > p');

    expect(result.textContent).to.be('Hello, bob!')
  });

  it('should update the name when the model changes', function(done){
      model.on('update', function(){
          var result = document.querySelector('foo > p');
          expect(result.textContent).to.be('Hello, fred!');
          done();
      });

      model.name = 'fred';
      model.trigger('update');
  });
});

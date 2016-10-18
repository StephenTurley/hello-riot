<foo>
  <p>Hello, { name }!</p>

  <script>
    this.name = opts.name;
    var self = this;
    opts.on('update', function(){
      self.name = opts.name;
      self.update();
    });
  </script>

</foo>

var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      arrayPictures: [
        'https://i.insider.com/5995bfb021c3fcc3788b4851?width=1100&format=jpeg&auto=webp',
        'https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/space-2023247.jpg?r=1566570895206',
        'https://www.universetoday.com/wp-content/uploads/2019/01/DyGvigfWsAIzaxj.jpg',
      ],
      id: '',
    },
    created: function () {
      this.id = setInterval(() => {
        this.next();
      },2000);
    },
    methods: {
      next: function (e) {
        if(e && e.type == "click") {
          clearInterval(this.id);
          this.id = "";
        }
        if(this.index > 0){
          this.index--;
        } else {
          this.index = 2;
        }
      },
      prev: function() {
        clearInterval(this.id);
        this.id = "";
        if(this.index < this.arrayPictures.length - 1){
          this.index++;
        } else {
          this.index = 0;
        }
      },
      dotClick: function(i) {
        this.index = i;
      },
      autoplay: function() {
        if (!this.id) {
          this.id = setInterval(() => {
            this.next();
          },2000 );
        } else {
        clearInterval (this.id);
        this.id = "";
      }
    }
  }
});

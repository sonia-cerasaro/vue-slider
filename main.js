var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      arrayPictures: [
        'https://i.insider.com/5995bfb021c3fcc3788b4851?width=1100&format=jpeg&auto=webp',
        'https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/space-2023247.jpg?r=1566570895206',
        'https://www.universetoday.com/wp-content/uploads/2019/01/DyGvigfWsAIzaxj.jpg',
      ]
    },
    methods: { 
      prev: function() {
        if(this.index < this.arrayPictures.length - 1){
          this.index++;
        } else {
          this.index = 0;
        }
      }
    }
  });

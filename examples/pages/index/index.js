Page({
  onShareAppMessage() {
    return {
      title: ''
    };
  },
  data: {
    name: 'your name',
    count: 0
  },
  onClick() {
    console.log('clicked');
  }
});

export default () => {
  const prods = reactive([
    {
      id: 100,
      name: "筆",
      price: 250,
      img: "https://cf.shopee.tw/file/932963c0ec43397c77e8b71415bbd80e",
    },
    {
      id: 101,
      name: "墨",
      price: 420,
      img: "https://media.karousell.com/media/photos/products/2022/6/19/_35_1655646963_4953658a_progressive",
    },
    {
      id: 102,
      name: "紙",
      price: 100,
      img: "https://img.alicdn.com/i3/1741954992/O1CN01kTAkCZ1mkNt191EfN_!!1741954992.jpg_q50s50.jpg",
    },
    {
      id: 103,
      name: "硯",
      price: 750,
      img: "https://a.rimg.com.tw/s5/215/db9/fe08803/1/a5/a5/22129993037221_658.jpg",
    },
  ]);
  return prods;
};

const topics = [
  {
    id: "CSS0001",
    name: "Flex UI",
    img: "https://oracle-patches.com/images/2019/11/09/flexbox-css_large.jpg",
    type: "css",
    path: function () {
      return `/css/${this.id}`;
    },
  },
  {
    id: "CSS0002",
    name: "Box model UI",
    img: "https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png",
    type: "css",
    path: function () {
      return `/css/${this.id}`;
    },
  },
  {
    id: "CSS0003",
    name: "NavBar UI",
    img: "https://i.ytimg.com/vi/u7_ooIhAnKU/maxresdefault.jpg",
    type: "css",
    path: function () {
      return `/css/${this.id}`;
    },
  },
  {
    id: "B0001",
    name: "NavBar UI",
    img: "https://miro.medium.com/max/2486/1*N-3wLI6wuOvCr58b7Otq1w.png",
    type: "boostrap",
    path: function () {
      return `/boostrap/${this.id}`;
    },
  },
  {
    id: "B0002",
    name: "Flex UI",
    img: "https://miro.medium.com/max/3840/1*f8jKCd8c6dctd1QqO2P_sA.png",
    type: "boostrap",
    path: function () {
      return `/boostrap/${this.id}`;
    },
  },
  {
    id: "MUI0001",
    name: "Button",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQ_80tMLTrUMnd68N7pCFYIAOkRkcuhAlQw&usqp=CAU",
    type: "materialui",
    path: function () {
      return `/materialui/${this.id}`;
    },
  },
  {
    id: "MUI0002",
    name: "NavBar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_LXeDUiFrHyuTW5oCz0DOPL3eNfCPSwVRw&usqp=CAU",
    type: "materialui",
    path: function () {
      return `/materialui/${this.id}`;
    },
  },
];

export default topics;

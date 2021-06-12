const topics = [
  {
    id: "RC0001",
    name: "Life cycle",
    img: "https://miro.medium.com/max/1070/1*dFwpPvYc9TVlXcKzHHcvgQ.png",
    path() {
      return `/class/${this.id}`;
    },
  },
  {
    id: "RC0002",
    name: "Form",
    img: "https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png",
    path() {
      return `/class/${this.id}`;
    },
  },
];

export default topics;

const topics = [
  {
    id: "RH0001",
    name: "Life cycle",
    img: "https://miro.medium.com/max/1070/1*dFwpPvYc9TVlXcKzHHcvgQ.png",
    path() {
      return `/hook-topic/${this.id}`;
    },
  },
  {
    id: "RH0002",
    name: "Form",
    img: "https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png",
    path() {
      return `/hook-topic/${this.id}`;
    },
  },
];

export default topics;

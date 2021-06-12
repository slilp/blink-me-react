import { AtomIcon, UiIcon } from "../../style/icons";

export const exampleImgs = [
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
  "https://lh3.googleusercontent.com/furN3VPqhmfMvpzbwhgx8LWQjyeI--2b3GwldMuiHWp7GwWgJOiqQUDJCki0fewfxbvIxUZr8H62pfdOeE-Eax-Fp3Y0S_8Ki31ppTY=s550",
];

export const contents = [
  {
    topic: "React Classic",
    subTopic: "class component",
    img: AtomIcon,
    desc: `Class components can define functions that will execute during
                the component’s lifecycle. There are a total of seven lifecycle
                methods: componentWillMount, componentDidMount,
                componentWillReceiveProps, shouldComponentUpdate,
                componentWillUpdate, componentDidUpdate, and
                componentWillUnmount.`,
    learn: "/classic",
  },
  {
    topic: "React Hook",
    subTopic: "function component",
    img: UiIcon,
    desc: `Hooks are the new feature introduced in the React 16.8 version.
                It allows you to use state and other React features without
                writing a class. Hooks are the functions which "hook into" React
                state and lifecycle features from function components. It does
                not work inside classes.`,
    learn: "/hook",
  },
];

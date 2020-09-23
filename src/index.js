import Vue from "vue";
import Banner from "./Banner";
import Button from "./Button";

const Components = {
  Banner,
  Button
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
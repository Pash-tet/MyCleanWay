import { Controller } from "@hotwired/stimulus";
import { themeChange } from "theme-change";

export default class extends Controller {
  static targets = ["name", "output"];

  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
  greet() {
    themeChange();
    console.log("tyatat");
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}

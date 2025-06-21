import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "iconShow", "iconHide"]

  toggle(e) {
    e.preventDefault()
    const newType = this.inputTarget.type === "password" ? "text" : "password"
    this.inputTarget.type = newType

    if (newType === "text") {
      this.iconShowTarget.classList.add("hidden")
      this.iconHideTarget.classList.remove("hidden")
    } else {
      this.iconShowTarget.classList.remove("hidden")
      this.iconHideTarget.classList.add("hidden")
    }
  }
}

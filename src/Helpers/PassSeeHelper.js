export function PassSee(id) {
    const PassSee = document.getElementById(id)
    if (PassSee.type === "password") {
      PassSee.type = "text"
    } else {
      PassSee.type = "password"
    }
  }
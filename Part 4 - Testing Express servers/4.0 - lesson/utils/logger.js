const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

const exportedMethods = {info, error}

// Use named variable so that "Find All References" in VSCode can find where the methods are imported
module.exports = exportedMethods
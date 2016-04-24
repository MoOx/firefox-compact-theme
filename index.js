const { attachTo, detachFrom } = require("sdk/content/mod")
const { Style } = require("sdk/stylesheet/style")
const { getMostRecentWindow } = require("sdk/window/utils")
const { browserWindows } = require("sdk/windows")
const { viewFor } = require("sdk/view/core")

const style = Style({
  uri: "./index.css"
})

attachTo(style, getMostRecentWindow())

browserWindows.on("open", function(window) {
  attachTo(style, viewFor(window))
})

require("sdk/system/unload").when(function() {
  for (let window of browserWindows) {
    detachFrom(style, viewFor(window))
  }
})

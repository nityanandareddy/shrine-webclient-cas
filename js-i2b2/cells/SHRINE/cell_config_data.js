// this file contains a list of all files that need to be loaded dynamically for this i2b2 Cell
// every file in this list will be loaded after the cell's Init function is called
{
  files: [
      "dist/shrine.bundle.js"
    //"SHRINE_ctrl.js",
    //"i2b2_msgs.js"
  ],
  css: [],
  config: {
    // additional configuration variables that are set by the system
    name: "SHRINE Cell",
    description: "The SHRINE cell...",
    category: ["core","cell","shrine"],
    newTopicURL: "https://shrine-dev.bmi.emory.edu/steward/client/index.html",
    readApprovedURL:"https://shrine-dev.bmi.emory.edu/shrine/rest/i2b2/request",
    wrapperHtmlFile: "./js-shrine/shrine.plugin.html"
  }
}

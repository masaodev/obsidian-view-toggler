/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "toggle-view",
      name: "Toggle View",
      callback: () => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (view) {
          const state = view.getState();
          if (state.mode === "preview") {
            state.mode = "source";
            state.source = false;
            new import_obsidian.Notice("Live Preview");
          } else if (!state.source) {
            state.source = true;
            new import_obsidian.Notice("Source mode");
          } else {
            state.mode = "preview";
            state.source = false;
            new import_obsidian.Notice("Reading view");
          }
          view.setState(
            state,
            { history: false }
          );
        }
      }
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTWFya2Rvd25WaWV3LCBOb3RpY2UsIFBsdWdpbiB9IGZyb20gJ29ic2lkaWFuJztcblxuLy8gUmVtZW1iZXIgdG8gcmVuYW1lIHRoZXNlIGNsYXNzZXMgYW5kIGludGVyZmFjZXMhXG5cbmludGVyZmFjZSBWaWV3VG9nZ2xlU2V0dGluZ3Mge1xuXHRteVNldHRpbmc6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogVmlld1RvZ2dsZVNldHRpbmdzID0ge1xuXHRteVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cdHNldHRpbmdzOiBWaWV3VG9nZ2xlU2V0dGluZ3M7XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICd0b2dnbGUtdmlldycsXG5cdFx0XHRuYW1lOiAnVG9nZ2xlIFZpZXcnLFxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG5cdFx0XHRcdGlmICh2aWV3KSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSB2aWV3LmdldFN0YXRlKCk7XG5cdFx0XHRcdFx0aWYoc3RhdGUubW9kZSA9PT0gXCJwcmV2aWV3XCIpIHtcblx0XHRcdFx0XHRcdC8vIEVkaXRpbmcgdmlld1x1RkYwOFx1MzBFOVx1MzBBNFx1MzBENlx1MzBEN1x1MzBFQ1x1MzBEM1x1MzBFNVx1MzBGQ1x1RkYwOExpdmUgUHJldmlld1x1RkYwOVxuXHRcdFx0XHRcdFx0c3RhdGUubW9kZSA9IFwic291cmNlXCI7XG5cdFx0XHRcdFx0XHRzdGF0ZS5zb3VyY2UgPSBmYWxzZTtcblx0XHRcdFx0XHRcdG5ldyBOb3RpY2UoJ0xpdmUgUHJldmlldycpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXN0YXRlLnNvdXJjZSkge1xuXHRcdFx0XHRcdFx0Ly8gRWRpdGluZyB2aWV3XHVGRjA4XHUzMEJEXHUzMEZDXHUzMEI5XHUzMEUyXHUzMEZDXHUzMEM5XHVGRjA5XG5cdFx0XHRcdFx0XHRzdGF0ZS5zb3VyY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0bmV3IE5vdGljZSgnU291cmNlIG1vZGUnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gUmVhZGluZyB2aWV3XG5cdFx0XHRcdFx0XHRzdGF0ZS5tb2RlID0gXCJwcmV2aWV3XCI7XG5cdFx0XHRcdFx0XHRzdGF0ZS5zb3VyY2UgPSBmYWxzZTtcblx0XHRcdFx0XHRcdG5ldyBOb3RpY2UoJ1JlYWRpbmcgdmlldycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZXcuc2V0U3RhdGUoXG5cdFx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRcdHsgaGlzdG9yeTogZmFsc2UgfSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRvbnVubG9hZCgpIHtcblxuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cbn1cblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE2QztBQVE3QyxJQUFNLG1CQUF1QztBQUFBLEVBQzVDLFdBQVc7QUFDWjtBQUVBLElBQXFCLFdBQXJCLGNBQXNDLHVCQUFPO0FBQUEsRUFHNUMsTUFBTSxTQUFTO0FBQ2QsVUFBTSxLQUFLLGFBQWE7QUFFeEIsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDZixjQUFNLE9BQU8sS0FBSyxJQUFJLFVBQVUsb0JBQW9CLDRCQUFZO0FBQ2hFLFlBQUksTUFBTTtBQUNULGdCQUFNLFFBQVEsS0FBSyxTQUFTO0FBQzVCLGNBQUcsTUFBTSxTQUFTLFdBQVc7QUFFNUIsa0JBQU0sT0FBTztBQUNiLGtCQUFNLFNBQVM7QUFDZixnQkFBSSx1QkFBTyxjQUFjO0FBQUEsVUFDMUIsV0FBVyxDQUFDLE1BQU0sUUFBUTtBQUV6QixrQkFBTSxTQUFTO0FBQ2YsZ0JBQUksdUJBQU8sYUFBYTtBQUFBLFVBQ3pCLE9BQU87QUFFTixrQkFBTSxPQUFPO0FBQ2Isa0JBQU0sU0FBUztBQUNmLGdCQUFJLHVCQUFPLGNBQWM7QUFBQSxVQUMxQjtBQUNBLGVBQUs7QUFBQSxZQUNKO0FBQUEsWUFDQSxFQUFFLFNBQVMsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ3BCLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDMUU7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNsQztBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=

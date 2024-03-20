import { MarkdownView, Notice, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

interface ViewToggleSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: ViewToggleSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: ViewToggleSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'toggle-view',
			name: 'Toggle View',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					const state = view.getState();
					if(state.mode === "preview") {
						// Editing view（ライブプレビュー（Live Preview）
						state.mode = "source";
						state.source = false;
						new Notice('Live Preview');
					} else if (!state.source) {
						// Editing view（ソースモード）
						state.source = true;
						new Notice('Source mode');
					} else {
						// Reading view
						state.mode = "preview";
						state.source = false;
						new Notice('Reading view')
					}
					view.setState(
						state,
						{ history: false },
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
}


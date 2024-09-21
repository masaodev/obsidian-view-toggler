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

		// Toggle Viewコマンド追加
		this.addCommand({
			id: 'toggle-view',
			name: 'Toggle view',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					const state = view.getState();
					if(state.mode === "preview") {
						// Editing view（ライブプレビュー（Live Preview）
						state.mode = "source";
						state.source = false;
						new Notice('Live preview mode');
					} else if (!state.source) {
						// Editing view（ソースモード）
						state.mode = "source";
						state.source = true;
						new Notice('Source mode');
					} else {
						// Reading view
						state.mode = "preview";
						state.source = false;
						new Notice('Reading view mode')
					}
					view.setState(
						state,
						{ history: false },
					);
				}
			}
		});

		// Set live preview modeコマンド追加
		this.addCommand({
			id: 'set-live-preview-mode',
			name: 'Set live preview mode',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					const state = view.getState();
					// Editing view（ライブプレビュー（Live Preview）
					state.mode = "source";
					state.source = false;
					new Notice('Live preview mode');
					view.setState(
						state,
						{ history: false },
					);
				}
			}
		});

		// Set Source view modeコマンド追加
		this.addCommand({
			id: 'set-source-view-mode',
			name: 'Set source view mode',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					const state = view.getState();
					// Editing view（ソースモード）
					state.mode = "source";
					state.source = true;
					new Notice('Source mode');
					view.setState(
						state,
						{ history: false },
					);
				}
			}
		});

		// Set reading view modeコマンド追加
		this.addCommand({
			id: 'set-reading-view-mode',
			name: 'Set reading view mode',
			callback: () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (view) {
					const state = view.getState();
					// Reading view
					state.mode = "preview";
					state.source = false;
					new Notice('Reading view mode');
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


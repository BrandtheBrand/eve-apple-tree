import { Plugin, WorkspaceLeaf, PluginSettingTab, App, Setting } from "obsidian";
import { EveTreeView, VIEW_TYPE_EVE } from "./tree-view";
import { EveSettings } from "./layout";

const DEFAULT_SETTINGS: EveSettings = {
  onlyTreeNotes: true,
  forestByFolder: true,
  clusterLinkedDots: true,
};

export default class EveApplePlugin extends Plugin {
  settings: EveSettings = DEFAULT_SETTINGS;

  async onload() {
    await this.loadSettings();

    this.registerView(VIEW_TYPE_EVE, (leaf: WorkspaceLeaf) => new EveTreeView(leaf, this.settings, () => this.saveSettings()));

    this.addRibbonIcon("sprout", "Open Eve's Apple Tree", () => this.activateView());

    this.addCommand({
      id: "open-eve-apple-tree",
      name: "Open the tree of light",
      callback: () => this.activateView(),
    });

    this.addSettingTab(new EveSettingTab(this.app, this));
  }

  async activateView() {
    const { workspace } = this.app;
    let leaf: WorkspaceLeaf | null = workspace.getLeavesOfType(VIEW_TYPE_EVE)[0] ?? null;
    if (!leaf) {
      leaf = workspace.getLeaf(true);
      await leaf.setViewState({ type: VIEW_TYPE_EVE, active: true });
    }
    await workspace.revealLeaf(leaf);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    // one-time cleanup: the removed "Tree size" feature left a treeScale key in some saved data
    const bag = this.settings as unknown as Record<string, unknown>;
    if (bag.treeScale !== undefined) { delete bag.treeScale; await this.saveSettings(); }
  }
  async saveSettings() { await this.saveData(this.settings); }
}

class EveSettingTab extends PluginSettingTab {
  plugin: EveApplePlugin;
  constructor(app: App, plugin: EveApplePlugin) { super(app, plugin); this.plugin = plugin; }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("p", {
      text: "Your notes grow into a living 3D tree of light. Notes are placed by their frontmatter: " +
        "tree_type (root/trunk/leaf/flower/apple), field (sector), and time (height). Links become branches; " +
        "cross-field links become rhizome. Open the tree from the ribbon (sprout icon) or the command palette.",
    });

    new Setting(containerEl)
      .setName("Only show notes with tree frontmatter")
      .setDesc("When on, the tree renders only notes that have tree_type / field / time / flower frontmatter — keeps the view clean in a mixed vault. Click 'Rebuild from vault' in the view after changing.")
      .addToggle((t) =>
        t.setValue(this.plugin.settings.onlyTreeNotes)
          .onChange(async (v) => { this.plugin.settings.onlyTreeNotes = v; await this.plugin.saveSettings(); })
      );

    new Setting(containerEl)
      .setName("Forest mode — one folder = one tree")
      .setDesc("When on (recommended), each top-level folder becomes its own independent tree, arranged side by side as a forest. When off, the whole vault is a single tree. Click 'Rebuild from vault' in the view after changing.")
      .addToggle((t) =>
        t.setValue(this.plugin.settings.forestByFolder)
          .onChange(async (v) => { this.plugin.settings.forestByFolder = v; await this.plugin.saveSettings(); })
      );

    new Setting(containerEl)
      .setName("Cluster linked dots")
      .setDesc("When on (recommended), dots in the same field that link to each other are pulled together into clusters, while unrelated dots sit further apart — keeping the field wedges but making related ideas group. Turn off for a purely even spread. Skipped automatically for trees over 500 notes to keep Obsidian responsive. Click 'Rebuild from vault' in the view after changing.")
      .addToggle((t) =>
        t.setValue(this.plugin.settings.clusterLinkedDots)
          .onChange(async (v) => { this.plugin.settings.clusterLinkedDots = v; await this.plugin.saveSettings(); })
      );

  }
}

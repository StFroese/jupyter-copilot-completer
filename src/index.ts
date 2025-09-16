import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the copilot-completer extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'copilot-completer:plugin',
  description: 'A Jupyter extension providing GitHub Copilot as an Inline Completer through the Copilot LSP and the IInlineCompletionProvider interface.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension copilot-completer is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('copilot-completer settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for copilot-completer.', reason);
        });
    }
  }
};

export default plugin;

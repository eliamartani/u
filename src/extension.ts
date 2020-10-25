import {
  commands,
  ExtensionContext,
  StatusBarAlignment,
  StatusBarItem,
  window,
} from 'vscode';
import messages from './messages.json';

let statusBarItem: StatusBarItem;

function setMessage() {
  const message = randomMessage();

  statusBarItem.text = `💬 ${message}`;
  statusBarItem.tooltip = message;
}

function showMessage() {
  statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
  statusBarItem.color = 'white';
  statusBarItem.show();

  setMessage();
}

export function randomMessage(): string {
  const message = messages[Math.floor(Math.random() * messages.length)];

  return message;
}

function registerCommand(context: ExtensionContext) {
  let disposable = commands.registerCommand('u.renewMessage', setMessage);

  context.subscriptions.push(disposable);
}

export function activate(context: ExtensionContext) {
  showMessage();
  registerCommand(context);
}

export function deactivate() {
  if (statusBarItem) {
    statusBarItem.dispose();
  }
}

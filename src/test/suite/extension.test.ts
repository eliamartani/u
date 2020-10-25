import { strictEqual } from 'assert';
import { window } from 'vscode';
import { randomMessage } from '../../extension';
import messages from '../../messages.json';

suite('Extension', () => {
  window.showInformationMessage('Running tests...');

  describe('messages', () => {
    it('should contain at least 1 message', () => {
      strictEqual(messages.length > 0, true);
    });
  });

  describe('randomMessage', () => {
    it('should not be empty', () => {
      const message = randomMessage();

      strictEqual(message.length > 0, true);
    });
  });
});

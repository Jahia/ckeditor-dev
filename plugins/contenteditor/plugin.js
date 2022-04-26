/**
 * Intercepts escape press and dispatches esc event on the window to prevent this event being caught by CK Editor.
 */
(function() {
	'use strict';

	var ESCAPE_KEY_CODE = 27;
	var S_KEY_CODE = 83;

	CKEDITOR.plugins.add( 'contenteditor', {
		init: function( editor ) {
			editor.addCommand('contenteditorEscape', {
				exec: function() {
					window.dispatchEvent(new KeyboardEvent("keydown",{
						'key': 'Escape',
						'keyCode': ESCAPE_KEY_CODE
					}));
				}
			});

			editor.setKeystroke(ESCAPE_KEY_CODE, 'contenteditorEscape');

			editor.addCommand('contenteditorSave', {
				exec: function() {
					window.dispatchEvent(new KeyboardEvent("keydown",{
						'key': 's',
						'keyCode': S_KEY_CODE,
						'ctrlKey': true,
						'metaKey': true
					}));
				}
			});

			editor.setKeystroke(CKEDITOR.CTRL + S_KEY_CODE, 'contenteditorSave');
		}
	});
})();

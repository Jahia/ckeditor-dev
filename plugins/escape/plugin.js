/**
 * Intercepts escape press and dispatches esc event on the window to prevent this event being caught by CK Editor.
 */
(function() {
	'use strict';

	var ESCAPE_KEY_CODE = 27;

	CKEDITOR.plugins.add( 'escape', {
		init: function( editor ) {
			editor.on( 'key', function( evt ) {
				if ( evt.data.keyCode === ESCAPE_KEY_CODE ) {
					window.dispatchEvent(new KeyboardEvent("keydown",{
						'key': 'Escape',
						'keyCode': ESCAPE_KEY_CODE
					}));
				}
			});
		}
	});
})();

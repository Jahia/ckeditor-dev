/**
 * Digital Factory Check macro plugin
 * http://www.jahia.org/
 * Copyright (C) 2002-2014 Jahia Solutions Group SA. All rights reserved.
 */
CKEDITOR.plugins.add('macrosdropdown', {
	requires: ['richcombo'], //, 'styles' ],
	init: function (editor) {
		editor.ui.addRichCombo('Macros', {
			label: 'Macros',
			title: 'Insert macros',
			voiceLabel: 'Insert macros',
			className: 'cke_format',
			multiSelect: false,
			panel: {
				css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
				voiceLabel: editor.lang.panelVoiceLabel
			},

			init: function () {
				this.startGroup("Insert Macros");
				var initializerURL = window.location.protocol + "//" + window.location.host +
					(jahiaGWTParameters != undefined ? jahiaGWTParameters.contextPath : "") + '/cms/initializers';
				var xmlhttp = new XMLHttpRequest();
				var that = this;
				xmlhttp.onreadystatechange = function () {
					if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
						var data = JSON.parse(xmlhttp.responseText);
						for (var i in data) {
							that.add(data[i].value[0],data[i].value[0],data[i].value[0]);
						}
						that.render(editor, '');
					}
				};
				xmlhttp.open("POST", initializerURL, false);
				xmlhttp.setRequestHeader("Accept", "application/json");
				xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlhttp.send('initializers=choicelistmacros&name=macros&nodeuuid=' + contextJsParameters.siteUuid);
			},

			onClick: function (value) {
				editor.focus();
				editor.fire('saveSnapshot');
				editor.insertHtml(value);
				editor.fire('saveSnapshot');
			}
		});
	}
});

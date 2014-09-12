/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    CKEDITOR.DF_CONTEXT_PATH = (typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '';
    CKEDITOR.DF_LANG = (typeof contextJsParameters != 'undefined') ? contextJsParameters.uilang : 'en';
    CKEDITOR.DF_CONTENT_LANG = (typeof contextJsParameters != 'undefined') ? contextJsParameters.lang : 'en';
    CKEDITOR.DF_SITE_UUID = (typeof contextJsParameters != 'undefined') ? contextJsParameters.siteUuid : '';
    CKEDITOR.DF_CUSTOM_CONFIG = (typeof contextJsParameters != 'undefined') ? contextJsParameters.ckeCfg : '';

    config.language = CKEDITOR.DF_LANG;

    config.customConfig = CKEDITOR.DF_CUSTOM_CONFIG;

    config.contentlanguage = CKEDITOR.DF_CONTENT_LANG;

    config.siteUuid=CKEDITOR.DF_SITE_UUID;

    config.filebrowserBrowseUrl=CKEDITOR.DF_CONTEXT_PATH + '/engines/contentpicker.jsp?site=' + CKEDITOR.DF_SITE_UUID + '&lang='+ CKEDITOR.DF_CONTENT_LANG + '&uilang='+ CKEDITOR.DF_LANG;
    config.filebrowserImageBrowseUrl=CKEDITOR.DF_CONTEXT_PATH + '/engines/contentpicker.jsp?type=imagepicker&site=' + CKEDITOR.DF_SITE_UUID + '&lang='+ CKEDITOR.DF_CONTENT_LANG + '&uilang='+ CKEDITOR.DF_LANG;
    config.filebrowserFlashBrowseUrl=CKEDITOR.DF_CONTEXT_PATH + '/engines/contentpicker.jsp?mime=application%2Fx-shockwave-flash%2Cvideo%2Fx-flv&site=' + CKEDITOR.DF_SITE_UUID + '&lang='+ CKEDITOR.DF_CONTENT_LANG + '&uilang='+ CKEDITOR.DF_LANG;
    config.filebrowserLinkBrowseUrl=CKEDITOR.DF_CONTEXT_PATH + '/engines/contentpicker.jsp?type=editoriallinkpicker&site=' + CKEDITOR.DF_SITE_UUID + '&lang='+ CKEDITOR.DF_CONTENT_LANG + '&uilang='+ CKEDITOR.DF_LANG;

	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,'+
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%

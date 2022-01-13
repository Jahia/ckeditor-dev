/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.allowedContent = true;

	config.contextPath = (typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '';
	config.language = (typeof contextJsParameters != 'undefined') ? contextJsParameters.uilang : 'en';
	config.contentlanguage = (typeof contextJsParameters != 'undefined') ? contextJsParameters.lang : 'en';
	config.siteUuid = (typeof contextJsParameters != 'undefined') ? contextJsParameters.siteUuid : '';
	config.customConfig = (typeof contextJsParameters != 'undefined') ? contextJsParameters.ckeCfg : '';

	config.filebrowserWindowWidth = '810';
	config.filebrowserWindowHeight = '650';
	config.filebrowserLinkWindowHeight = '800';
	config.filebrowserWindowFeatures = 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes';
	config.filebrowserWindowName = 'JahiaFileBrowser';
	config.filebrowserBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?site=' + config.siteUuid + '&lang='+ config.contentlanguage + '&uilang='+ config.language;
	config.filebrowserImageBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=imagepicker&site=' + config.siteUuid + '&lang='+ config.contentlanguage + '&uilang='+ config.language;
	config.filebrowserFlashBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?mime=application%2Fx-shockwave-flash%2Cvideo%2Fx-flv&site=' + config.siteUuid + '&lang='+ config.contentlanguage + '&uilang='+ config.language;
	config.filebrowserLinkBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=editoriallinkpicker&site=' + config.siteUuid + '&lang='+ config.contentlanguage + '&uilang='+ config.language;
	config.image_previewText = '';

	config.toolbar = 'Full';
	config.toolbar_Full = [
			['Source','-','NewPage','Preview','Print','-','Templates'],
			['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'Undo','Redo'],
			['Find','Replace','-','SelectAll','-','wsc', 'Scayt', 'ACheck'],
			'/',
			['Bold','Italic','Underline','Strike','Subscript','Superscript','RemoveFormat'],
			['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			['Link','Unlink','Anchor'],
			['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
			'/',
			['Macros','Styles','Format','Font','FontSize'],
			['TextColor','BGColor'],
			['Maximize', 'ShowBlocks','-','About']
		];
	config.toolbar_Basic = [
			['Source','-','NewPage','Preview','Print','-','Templates'],
			['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'Undo','Redo'],
			['Find','Replace','-','SelectAll','-','wsc', 'Scayt', 'ACheck'],
			'/',
			['Bold','Italic','Underline','Strike','Subscript','Superscript','RemoveFormat'],
			['NumberedList','BulletedList'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			['Link','Unlink','Anchor'],
			['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
			'/',
			['Maximize', 'ShowBlocks','-','About']
		];
	config.toolbar_Mini = [
			['Bold','Italic','Underline','Strike','RemoveFormat'],
			['NumberedList','BulletedList','-','Blockquote'],
			['Link','Unlink'],
			['Image','Smiley'],
			['TextColor','BGColor']
		];
	config.toolbar_Light = [
			['Bold','Italic','Underline','Strike','RemoveFormat','-','NumberedList','BulletedList']
		];
	config.toolbar_User = [
			['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'Undo','Redo'],
			['Find','Replace','-','SelectAll','-','wsc', 'Scayt', 'ACheck'],
			['Link','Unlink','Anchor', 'Image','LinkFile'],
			['HorizontalRule','Smiley','SpecialChar','PageBreak'],
			'/',
			['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
			['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			'/',
			['Styles','Format','Font','FontSize'],
			['TextColor','BGColor'],
			['Maximize', 'ShowBlocks']
		];

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
		'copyformatting,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
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
		'pastefromgdocs,' +
		'pastefromlibreoffice,' +
		'pastefromword,' +
		'pastetext,' +
		'editorplaceholder,' +
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
		'tableselection,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'uploadimage,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%

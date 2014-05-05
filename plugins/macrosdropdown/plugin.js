/**
 * Digital Factory Check macro plugin
 * http://www.jahia.org/
 * Copyright (C) 2002-2014 Jahia Solutions Group SA. All rights reserved.
 */
CKEDITOR.plugins.add('macrosdropdown', {
            requires: ['richcombo'], //, 'styles' ],
            init: function (editor) {
                var tags = [];
                // test if Macros is defined in Toolbar
                var isMacrosDefined = false;
                if (typeof $ == 'undefined') {
                	return;
                }
                $(eval("editor.config.toolbar_"+editor.config.toolbar)).each(function (){
                    if(!isMacrosDefined && $.inArray('Macros',this)>-1) {
                        isMacrosDefined = true;
                    }
                });
                if (isMacrosDefined) {
                    var domainURL = window.location.protocol + "//" + window.location.host +
                                    (jahiaGWTParameters != undefined ? jahiaGWTParameters.contextPath : "");
                    var initializerURL = domainURL+ '/cms/initializers';
                    $.get(initializerURL,
                            {name: 'macros', nodeuuid: (contextJsParameters != undefined ? contextJsParameters.siteUuid : null), initializers: 'choicelistmacros'}, function (result) {
                                $.each(result, function (key, value) {
                                    tags.push([value['name'][0], value['name'][0], value['name'][0]]);
                                });
                            }, 'json');
                }

                editor.ui.addRichCombo('Macros', {
                            label: 'Macros',
                            title: 'Insert macros',
                            voiceLabel: 'Insert macros',
                            className: 'cke_format',
                            multiSelect: false,
                            panel: {
                                css: [ editor.config.contentsCss, CKEDITOR.skin.getPath('editor') ],
                                voiceLabel: editor.lang.panelVoiceLabel
                            },

                            init: function () {
                                this.startGroup("Insert Macros");
                                //this.add('value', 'drop_text', 'drop_label');
                                for (var this_tag in tags) {
                                    this.add(tags[this_tag][0], tags[this_tag][1], tags[this_tag][2]);
                                }
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
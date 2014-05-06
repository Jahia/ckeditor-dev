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
                                css: [ editor.config.contentsCss, CKEDITOR.skin.getPath('editor') ],
                                voiceLabel: editor.lang.panelVoiceLabel
                            },

                            init: function () {
                                this.startGroup("Insert Macros");
                                var tags = [];
                                var initializerURL = window.location.protocol + "//" + window.location.host +
                                (jahiaGWTParameters != undefined ? jahiaGWTParameters.contextPath : "") + '/cms/initializers';
                                $.ajax({
                                    url: initializerURL,
                                    data: {name: 'macros', nodeuuid: contextJsParameters.siteUuid, initializers: 'choicelistmacros'},
                                    success: function (result) {
                                            $.each(result, function (key, value) {
                                                tags.push([value['name'][0], value['name'][0], value['name'][0]]);
                                            });
                                        },
                                    dataType: 'json',
                                    async: false
                                });
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
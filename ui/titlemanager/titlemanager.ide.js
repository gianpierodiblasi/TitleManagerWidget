/* global TW */
TW.IDE.Widgets.titlemanager = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/TitleManagerWidget/ui/titlemanager/title.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'TitleManager',
      'description': 'Widget to manage browser title',
      'category': ['Common'],
      'iconImage': 'title.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'title': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingTarget': true,
          'isEditable': true,
          'isLocalizable': true,
          'description': 'the title'
        }
      }
    };
  };

  this.widgetEvents = function () {
    return {
    };
  };

  this.widgetServices = function () {
    return {
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-titlemanager">' + '<span class="titlemanager-property">Title Manager</span>' + '</div>';
  };
};
/* global TW */
TW.Runtime.Widgets.titlemanager = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false,
      propertyAttributes: {
        'title': {
          isLocalizable: true
        }
      }
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-titlemanager" style="display:none;"></div>';
    return html;
  };

  this.updateTitle = function () {
    setTimeout(() => {
      var debugMode = thisWidget.getProperty('debugMode');
      var title = thisWidget.getProperty("title");

      if (debugMode) {
        console.log("Title Manager -> title: " + title);
      }

      if (title) {
        var tag = document.querySelector("title");
        if (!tag) {
          tag = document.createElement('title');
          document.getElementsByTagName('head')[0].appendChild(tag);
        }
        tag.textContent = title;
      }
    }, 500);
  };

  this.afterRender = function () {
    this.updateTitle();
  };

  this.updateProperty = function (updatePropertyInfo) {
    var properties = [
      "debugMode", "title"
    ];

    if (properties.indexOf(updatePropertyInfo.TargetProperty) !== -1) {
      this.setProperty(updatePropertyInfo.TargetProperty, updatePropertyInfo.RawSinglePropertyValue);
    }

    if (updatePropertyInfo.TargetProperty === "title") {
      this.updateTitle();
    }
  };
};
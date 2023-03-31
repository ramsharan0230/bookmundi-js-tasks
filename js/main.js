var $ = (function() {

    // Private methods
    function getElements(selector) {
        if (selector.startsWith('#')) {
        return [document.getElementById(selector.substring(1))];
        } else {
        return document.querySelectorAll(selector);
        }
    }
  
    // Public methods
    return {
      addClass: function(selector, className) {
        var elements = getElements(selector);
        for (var i = 0; i < elements.length; i++) {
          if (!elements[i].classList.contains(className)) {
            elements[i].classList.add(className);
          }
        }
      },
  
      removeClass: function(selector, className) {
        var elements = getElements(selector);
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].classList.contains(className)) {
            elements[i].classList.remove(className);
          }
        }
      },

      removeClassById: function(id, className) {
        var element = document.getElementById(id);
        if (element && element.classList.contains(className)) {
          element.classList.remove(className);
        }
      },

      addClassById: function(id, className) {
        var element = document.getElementById(id);
        if (element && !element.classList.contains(className)) {
          element.classList.add(className);
        }
      },

      getDataAttributes: function(selector) {
        var elements = getElements(selector);
        var values = [];
        for (var i = 0; i < elements.length; i++) {
          values.push(elements[i].dataset);
        }
        return values;
      },

      ajax: function(options) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url);
        xhr.onload = function() {
          if (xhr.status === 200) {
            options.success(xhr.response);
          } else {
            options.error(xhr.statusText);
          }
        };
        xhr.onerror = function() {
          options.error(xhr.statusText);
        };
        xhr.send(options.data);
      }

    };
  
  })();
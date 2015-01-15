/* Copyright 2013 Twitter, Inc. Licensed under The MIT License. http://opensource.org/licenses/MIT */

import import_utils from './lib/utils';
import import_registry from './lib/registry';
import import_debug from './lib/debug';
import import_advice from './lib/advice';
import import_component from './lib/component';
import import_compose from './lib/compose';
import import_logger from './lib/logger';

export default (function () {
  var define = function (reqs, cb) { return cb.apply(this, reqs) };

return define(

  [
    import_advice,
    import_component,
    import_compose,
    import_debug,
    import_logger,
    import_registry,
    import_utils
  ],

  function(advice, component, compose, debug, logger, registry, utils) {
    'use strict';

    return {
      advice: advice,
      component: component,
      compose: compose,
      debug: debug,
      logger: logger,
      registry: registry,
      utils: utils
    };

  }
);
})();

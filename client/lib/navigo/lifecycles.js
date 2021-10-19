import Q from './Q.js';
import checkForLeaveHook from './middlewares/checkForLeaveHook.js';
import checkForBeforeHook from './middlewares/checkForBeforeHook.js';
import callHandler from './middlewares/callHandler.js';
import checkForAfterHook from './middlewares/checkForAfterHook.js';
import checkForAlreadyHook from './middlewares/checkForAlreadyHook.js';
import checkForNotFoundHandler from './middlewares/checkForNotFoundHandler.js';
import errorOut from './middlewares/errorOut.js';
import flushCurrent from './middlewares/flushCurrent.js';
import updateState from './middlewares/updateState.js';
export var foundLifecycle = [
  checkForAlreadyHook,
  checkForBeforeHook,
  callHandler,
  checkForAfterHook,
];
export var notFoundLifeCycle = [
  checkForLeaveHook,
  checkForNotFoundHandler,
  Q['if'](
    function (_ref) {
      var notFoundHandled = _ref.notFoundHandled;
      return notFoundHandled;
    },
    foundLifecycle.concat([updateState]),
    [errorOut, flushCurrent]
  ),
];

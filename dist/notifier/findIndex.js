import 'core-js/modules/es6.array.find-index';
import 'core-js/modules/es6.function.bind';
import _newArrowCheck from '@babel/runtime/helpers/newArrowCheck';
import { hasIn } from '@jumpn/utils-composite';

var _this = undefined;

var findIndex = function findIndex(notifiers, key, value) {
  _newArrowCheck(this, _this);

  return (// $FlowFixMe: flow is having some troubles to match hasIn signature (curry)
    notifiers.findIndex(hasIn([key], value))
  );
}.bind(undefined);

export default findIndex;
//# sourceMappingURL=findIndex.js.map

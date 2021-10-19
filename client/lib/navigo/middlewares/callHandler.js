import { undefinedOrTrue } from '../utils.js';
export default function callHandler(context, done) {
  if (undefinedOrTrue(context.navigateOptions, 'callHandler')) {
    context.match.route.handler(context.match);
  }

  context.instance.updatePageLinks();
  done();
}

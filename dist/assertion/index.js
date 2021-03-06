"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO
const util = require("util");
/**
 * Wraps function to handle assertions as promises.
 *
 * @param {(req, res) => void} fn The function with assertions
 * @returns {Promise<any>}
 */
const AssertionHelper = function (fn) {
    return function (req, res, next) {
        try {
            const cb = fn(req, res);
            if (cb && util.isFunction(cb.catch)) {
                return cb.then(next).catch((error) => {
                    error.status = error.status || 400;
                    next(error);
                });
            }
            next();
            return cb;
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    };
};
AssertionHelper.toBoolean = (fn) => {
    return function (req, res, next) {
        return fn(req, res);
    };
};
exports.default = AssertionHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvYXNzZXJ0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTztBQUNQLDZCQUE2QjtBQU83Qjs7Ozs7R0FLRztBQUNILE1BQU0sZUFBZSxHQUFHLFVBQVUsRUFBc0I7SUFDdEQsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQzdCLElBQUksQ0FBQztZQUNILE1BQU0sRUFBRSxHQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFTLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO29CQUNoRCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFRLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRCxlQUF1QixDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQXNCLEVBQUUsRUFBRTtJQUM5RCxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBUSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBR0Ysa0JBQWUsZUFBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2VydGlvbkhlbHBlciB7XG4gIChmbjogKHJlcSwgcmVzKSA9PiB2b2lkKTogdm9pZDtcbiAgdG9Cb29sZWFuKGZuOiBGdW5jdGlvbik7XG59XG5cbi8qKlxuICogV3JhcHMgZnVuY3Rpb24gdG8gaGFuZGxlIGFzc2VydGlvbnMgYXMgcHJvbWlzZXMuXG4gKlxuICogQHBhcmFtIHsocmVxLCByZXMpID0+IHZvaWR9IGZuIFRoZSBmdW5jdGlvbiB3aXRoIGFzc2VydGlvbnNcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmNvbnN0IEFzc2VydGlvbkhlbHBlciA9IGZ1bmN0aW9uIChmbjogKHJlcSwgcmVzKSA9PiB2b2lkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2IgPSAoZm4ocmVxLCByZXMpIGFzIGFueSk7XG4gICAgICBpZiAoY2IgJiYgdXRpbC5pc0Z1bmN0aW9uKGNiLmNhdGNoKSkge1xuICAgICAgICByZXR1cm4gY2IudGhlbihuZXh0KS5jYXRjaCgoZXJyb3I6IEVycm9yIHwgYW55KSA9PiB7XG4gICAgICAgICAgZXJyb3Iuc3RhdHVzID0gZXJyb3Iuc3RhdHVzIHx8IDQwMDtcbiAgICAgICAgICBuZXh0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBuZXh0KCk7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9IGFzIGFueTtcbn07XG5cbihBc3NlcnRpb25IZWxwZXIgYXMgYW55KS50b0Jvb2xlYW4gPSAoZm46IChyZXEsIHJlcykgPT4gdm9pZCkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmV0dXJuIGZuKHJlcSwgcmVzKTtcbiAgfSBhcyBhbnk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFzc2VydGlvbkhlbHBlciBhcyBJQXNzZXJ0aW9uSGVscGVyO1xuIl19
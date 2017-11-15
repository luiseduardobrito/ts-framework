"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpSuccess;
(function (HttpSuccess) {
    HttpSuccess[HttpSuccess["OK"] = 200] = "OK";
})(HttpSuccess = exports.HttpSuccess || (exports.HttpSuccess = {}));
var HttpRedirect;
(function (HttpRedirect) {
    HttpRedirect[HttpRedirect["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpRedirect[HttpRedirect["TEMPORARY_REDIRECT"] = 302] = "TEMPORARY_REDIRECT";
    HttpRedirect[HttpRedirect["NOT_MODIFIED"] = 403] = "NOT_MODIFIED";
})(HttpRedirect = exports.HttpRedirect || (exports.HttpRedirect = {}));
var HttpClientErrors;
(function (HttpClientErrors) {
    HttpClientErrors[HttpClientErrors["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpClientErrors[HttpClientErrors["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpClientErrors[HttpClientErrors["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpClientErrors[HttpClientErrors["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpClientErrors[HttpClientErrors["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpClientErrors[HttpClientErrors["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
})(HttpClientErrors = exports.HttpClientErrors || (exports.HttpClientErrors = {}));
var HttpServerErrors;
(function (HttpServerErrors) {
    HttpServerErrors[HttpServerErrors["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpServerErrors[HttpServerErrors["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpServerErrors[HttpServerErrors["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpServerErrors[HttpServerErrors["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(HttpServerErrors = exports.HttpServerErrors || (exports.HttpServerErrors = {}));
exports.default = {
    Success: HttpSuccess,
    Redirect: HttpRedirect,
    Client: HttpClientErrors,
    Server: HttpServerErrors,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc2VydmVyL2Vycm9yL2h0dHAvSHR0cENvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFdBRVg7QUFGRCxXQUFZLFdBQVc7SUFDckIsMkNBQVEsQ0FBQTtBQUNWLENBQUMsRUFGVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUV0QjtBQUVELElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QiwyRUFBdUIsQ0FBQTtJQUN2Qiw2RUFBd0IsQ0FBQTtJQUN4QixpRUFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7QUFFRCxJQUFZLGdCQU9YO0FBUEQsV0FBWSxnQkFBZ0I7SUFDMUIsdUVBQWlCLENBQUE7SUFDakIseUVBQWtCLENBQUE7SUFDbEIsbUVBQWUsQ0FBQTtJQUNmLG1FQUFlLENBQUE7SUFDZiw2RkFBNEIsQ0FBQTtJQUM1QixtRkFBdUIsQ0FBQTtBQUN6QixDQUFDLEVBUFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFPM0I7QUFFRCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDMUIsMkZBQTJCLENBQUE7SUFDM0IsK0VBQXFCLENBQUE7SUFDckIsdUVBQWlCLENBQUE7SUFDakIsdUZBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUxXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSzNCO0FBSUQsa0JBQWU7SUFDYixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixNQUFNLEVBQUUsZ0JBQWdCO0lBQ3hCLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEh0dHBTdWNjZXNzIHtcbiAgT0sgPSAyMDAsXG59XG5cbmV4cG9ydCBlbnVtIEh0dHBSZWRpcmVjdCB7XG4gIE1PVkVEX1BFUk1BTkVOVExZID0gMzAxLFxuICBURU1QT1JBUllfUkVESVJFQ1QgPSAzMDIsXG4gIE5PVF9NT0RJRklFRCA9IDQwMyxcbn1cblxuZXhwb3J0IGVudW0gSHR0cENsaWVudEVycm9ycyB7XG4gIEJBRF9SRVFVRVNUID0gNDAwLFxuICBVTkFVVEhPUklaRUQgPSA0MDEsXG4gIEZPUkJJRERFTiA9IDQwMyxcbiAgTk9UX0ZPVU5EID0gNDA0LFxuICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFID0gNDE1LFxuICBUT09fTUFOWV9SRVFVRVNUUyA9IDQyOSxcbn1cblxuZXhwb3J0IGVudW0gSHR0cFNlcnZlckVycm9ycyB7XG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMCxcbiAgTk9UX0lNUExFTUVOVEVEID0gNTAxLFxuICBCQURfR0FURVdBWSA9IDUwMixcbiAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDUwMyxcbn1cblxuZXhwb3J0IHR5cGUgSHR0cENvZGUgPSBIdHRwU3VjY2VzcyB8IEh0dHBSZWRpcmVjdCB8IEh0dHBDbGllbnRFcnJvcnMgfCBIdHRwU2VydmVyRXJyb3JzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFN1Y2Nlc3M6IEh0dHBTdWNjZXNzLFxuICBSZWRpcmVjdDogSHR0cFJlZGlyZWN0LFxuICBDbGllbnQ6IEh0dHBDbGllbnRFcnJvcnMsXG4gIFNlcnZlcjogSHR0cFNlcnZlckVycm9ycyxcbn0iXX0=
// match exacto
export function showWhenAnyOf(app, routes, loc) {

    if (
        routes.some(function(route) {
            return location.pathname === route;
        })
    ) {
        return true;
    }
    return false;
}
// prefijo
export function showWhenPrefix(app, routes, loc) {
    if (
        routes.some(function(route) {
            return location.pathname.startsWith(route);
        })
    ) {
        return true;
    }
    return false;
}
// todas menos esas
export function showExcept(app, routes, loc) {
    if (
        routes.every(function(route) {
            return location.pathname !== route;
        })
    ) {
        return true;
    }
    return false;
}
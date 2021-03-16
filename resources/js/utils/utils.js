
function isAuth() {
    return ("session" in localStorage);
}

export { isAuth }

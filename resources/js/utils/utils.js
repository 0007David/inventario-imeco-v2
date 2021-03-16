
function isAuth() {
    console.log('isAuth');
    return ("session" in localStorage);
}

export { isAuth }

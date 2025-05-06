let isLoggedIn = $state(false);

export function setLoggedIn(value: boolean) {
    isLoggedIn = value;
}

export function getLoggedIn() {
    return isLoggedIn;
}
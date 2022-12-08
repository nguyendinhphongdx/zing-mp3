export const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}
export const getActiveNavItem = (path: string, router: string): boolean => {
    if ((!path || path === '/') && (router === '' || router === '/')) {
        return true;
    }
    else if (path !== '/' && router.includes(path)) {
        return true;
    }
    else {
        return false;
    }
}
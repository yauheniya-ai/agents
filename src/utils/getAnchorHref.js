export const getAnchorHref = (id) => {
    const isLocalhost = window?.location?.hostname === 'localhost';
    return isLocalhost ? `/#/#${id}` : `/agents/#/#${id}`;
};

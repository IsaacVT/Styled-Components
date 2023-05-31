export const GetSate = () => {
    let stateTheme = JSON.parse(window.localStorage.getItem("stateTheme"));

    if (stateTheme === undefined || stateTheme === null) {
        stateTheme = true;
        window.localStorage.setItem("stateTheme", JSON.stringify(stateTheme));

        return true;
    }

    return stateTheme;
};

export const UpdateSate = (props) => {
    window.localStorage.setItem("stateTheme", JSON.stringify(props));
};

import React from "react";

const SearchPanel = () => {

    const searText =  'xzxcz';
    const searchStyle = {
        fontSize: '25px'
    };
    return (
        <input placeholder={searText}
               style={searchStyle}
        />
    );
};

export default SearchPanel;
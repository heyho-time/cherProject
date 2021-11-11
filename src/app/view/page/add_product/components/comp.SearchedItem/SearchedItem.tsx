import React from 'react';

const SearchedItem = ({filteredProducts})=> {
    return (
        <div>{filteredProducts.title}
        </div>
    );
};

export default SearchedItem;
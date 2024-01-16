import { Input, Button } from 'antd';
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        onSearch(keyword);
    };

    return (
        <div className='search-bar'>

            {/* <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button> */}
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
                onPressEnter={handleSearch}
            />
            <Button type="primary" onClick={handleSearch} className="search-bar-button">Search</Button>
        </div>
    );
};

export default SearchBar;

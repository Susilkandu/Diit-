import React from "react";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="p-2">
            <div className="input-group border border-secondary">
                <i className="bi bi-search input-group-text border-0"></i>
                <input
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0px 0 0 10px',
                    }}
                    className="form-control px-2"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBox;

import React from 'react';

const Pagination = ({charactersPerPage, totalCharacters, paginate}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(numberPage => (
                    <li key={numberPage} className="page-item">
                        <a onClick={() => paginate(numberPage)}
                            href="!#"
                            className="page-link"
                        >
                            {numberPage}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
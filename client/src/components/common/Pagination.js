import React from 'react';
import './Pagination.css';

const Pagination = ({ total, limit = 10 }) => {
  const pagesNumber = (total / limit) + 1;
  const pagesArray = [...Array(pagesNumber).keys()];
  return (
        <div>
            <table id="pagination">
                <tbody>
                <tr>
                    {pagesArray.map(pageNumber => <td key={pageNumber}>{pageNumber + 1}</td>)}
                </tr>
                </tbody>
            </table>
    </div>
  );
};


export default Pagination;

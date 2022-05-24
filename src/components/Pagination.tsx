import { IPagination } from "../interfaces/interfaces";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
}: IPagination) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a href='!#' className='page-link' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

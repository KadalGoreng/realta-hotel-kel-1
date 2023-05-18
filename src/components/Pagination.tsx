import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <center>
      <nav className="justify-content-center">
        <ul className="inline-flex items-center -space-x-px">
          <>
            {pages.map((page: any) => (
              <li key={page}>
                <a
                  className={
                    page === currentPage
                      ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 light:border-gray-700 light:bg-gray-700 light:text-white"
                      : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </>
        </ul>
      </nav>
    </center>
  );
};

export default Pagination;

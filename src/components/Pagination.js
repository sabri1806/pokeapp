import { useEffect, useState } from "react";
import { Container, NextNav, PrevNav, PageNumber } from "./Pagination.styles";

const Pagination = ({
  initialPage,
  nextPage,
  onChangePage,
  prevPage,
  setOpenFlavorTextEntries,
}) => {
  const [page, setPage] = useState(initialPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onChangePage(page);
  }, [page, onChangePage]);

  const handlePrevButtonSelect = () => {
    setOpenFlavorTextEntries(false);
    setCurrentPage(currentPage - 1);
    setPage({ ...page, offset: page.offset - page.size });
  };

  const handleNextButtonSelect = () => {
    setOpenFlavorTextEntries(false);
    setCurrentPage(currentPage + 1);
    setPage({ ...page, offset: page.offset + page.size });
  };

  return (
    <Container>
      <PrevNav disabled={!prevPage} onClick={handlePrevButtonSelect}>
        &lt;
      </PrevNav>
      <PageNumber>{currentPage}</PageNumber>
      <NextNav disabled={!nextPage} onClick={handleNextButtonSelect}>
        &gt;
      </NextNav>
    </Container>
  );
};

export default Pagination;

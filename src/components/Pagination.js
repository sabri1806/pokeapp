import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1024px) {
    height: 50px;
  }
`;

const Nav = styled.button`
  background: #3f3f46;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 40px;
  font-weight: 600;
  width: 330px;
  &:disabled {
    color: #71717a;
    cursor:not-allowed;
  }
  @media (max-width: 1024px) {
  bottom: 0px;
  position: fixed;
  width: 50%;
  }
`;

  const NextNav = styled(Nav)`
    right: 0px;
  `;

  const PrevNav = styled(Nav)`
    left: 0px;
  `;

const Pagination = ({ initialPage, nextPage, onChangePage, prevPage, setOpenFlavorTextEntries}) => {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    onChangePage(page);
  }, [page, onChangePage]);

  const handlePrevButtonSelect = () => {
    setOpenFlavorTextEntries(false)
    setPage({ ...page, offset: page.offset - page.size });
  };

  const handleNextButtonSelect = () => {
    setOpenFlavorTextEntries(false)
    setPage({ ...page, offset: page.offset + page.size });
  };

  return (
    <Container>
      <PrevNav
        disabled={!prevPage}
        onClick={handlePrevButtonSelect}
      >
        &lt;
      </PrevNav>
      <NextNav
        disabled={!nextPage}
        onClick={handleNextButtonSelect}
      >
        &gt;
      </NextNav>
    </Container>
  );
};

export default Pagination;

import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Nav = styled.button`
  font-size: 40px;
  font-weight: 600;
`;

const Pagination = ({ initialPage, onChangePage }) => {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    onChangePage(page);
  }, [page, onChangePage]);

  return (
    <Container>
      <Nav
        onClick={() => {
          setPage({ ...page, offset: page.offset - page.size });
        }}
      >
        &lt;
      </Nav>
      <Nav
        onClick={() => {
          setPage({ ...page, offset: page.offset + page.size });
        }}
      >
        &gt;
      </Nav>
    </Container>
  );
};

export default Pagination;

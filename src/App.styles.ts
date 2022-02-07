import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const StyledButton = styled(IconButton)`
  position: absolute;
  z-index: 100;
  right: 3rem;
  top: 2.5rem;
  background-color: #fff;

  &:hover {
    background-color: #ffc221;
  }

  .MuiBadge-anchorOriginTopRightRectangle {
    top: -5px;
    right: -5px;
  }
`;

export const SearchInputWrap = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 10rem;
`;

export const GridMain = styled.div`
  grid-column: content-start/content-end;

  > h1 {
    padding-top: 3rem;
  }
`;

export const GridWrap = styled.ul`
  padding: 3rem 0 10rem;
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
  gap: 2rem;
  margin: 0;
`;

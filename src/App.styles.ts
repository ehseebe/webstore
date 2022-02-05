import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 40px;
`;

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
right: 10rem;`

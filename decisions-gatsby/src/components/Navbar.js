import styled from "styled-components";
import { 
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;

  @media (min-width: ${SMALL_BREAKPOINT}) {
    flex-direction: row;
  }
`

export { Navbar }

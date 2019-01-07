import styled from "styled-components";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT,
} from "./breakpoints"

const breakpointsMap = {
  sm: SMALL_BREAKPOINT,
  md: MEDIUM_BREAKPOINT,
  lg: LARGE_BREAKPOINT,
  xl: XLARGE_BREAKPOINT,
}


const hide = (state) => {
  if (state === undefined) return
  if (state.length < 1) return


  if (state[0] === 'xs') {
    return `
      display: none;
    `
  }

  const screenBreakpoint = breakpointsMap[state[0]]

  return `
    @media (min-width: ${screenBreakpoint}) {
      display: none;
    }
  `
}

const hideForRange = (state) => {
  if (state === undefined) return
  if (state.length < 2) return

  const smallerBreakpoint = breakpointsMap[state[0]]
  const largerBreakpoint = breakpointsMap[state[1]]

  return `
    display: block;

    @media (min-width: ${smallerBreakpoint}) {
      display: none;
    }

    @media (min-width: ${largerBreakpoint}) {
      display: block;
    }
  `
}

const visible = (state) => {
  if (state === undefined) return
  if (state.length < 1) return

  const screenBreakpoint = breakpointsMap[state[0]]

  return `
    display: none;

    @media (min-width: ${screenBreakpoint}) {
      display: block;
    }
  `
}

const visibleForRange = (state) => {
  if (state === undefined) return
  if (state.length < 2) return

  const smallerBreakpoint = breakpointsMap[state[0]]
  const largerBreakpoint = breakpointsMap[state[1]]

  return `
    display: none;

    @media (min-width: ${smallerBreakpoint}) {
      display: block;
    }

    @media (min-width: ${largerBreakpoint}) {
      display: none;
    }
  `
}


/*
  Why? We need a way to conditional show and hide elements.
  TODO: Detemine if we want visibility functions for all library elements

  props.hide
    > hide on screen and up
      >> [xs]: hidden on all
      >> [sm]: hidden on sm and up
      >> [md]: hidden on md and up
      >> [lg]: hidden on lg and up
    > hideForRange
      >> [sm,lg]: hidden between sm and lg

  props.visible
  > visible on screen and up, array
    >> [xs]: visible on all
    >> [sm]: visible on sm and up
    >> [md]: visible on md and up
    >> [lg]: visible on lg and up
  > visibleForRange
    >> [sm,lg]: visible between sm and lg

  NOTE: For visbility, hidden takes precedence
*/

const Cell = styled.div`

  ${(props) => hide(props.hide)}
  ${(props) => hideForRange(props.hide)}

  ${(props) => visible(props.visible)}
  ${(props) => visibleForRange(props.visible)}

`

export { Cell }

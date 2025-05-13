import { css } from 'styled-components';
import { colors, fontSizes, breakpoints } from './variables';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    color: ${colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.green} !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.green};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0.5;
    }
  `,

  button: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: 4px;
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.sm};
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(100, 255, 218, 0.07);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  smallButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    font-size: ${fontSizes.xs};
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(100, 255, 218, 0.07);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
      background-color: rgba(100, 255, 218, 0.07);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    @media (max-width: ${breakpoints.desktopL}) {
      padding: 0 100px;
    }
    @media (max-width: ${breakpoints.desktopM}) {
      padding: 0 50px;
    }
    @media (max-width: ${breakpoints.tabletL}) {
      padding: 0 25px;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
  `,
};

export default mixins;

import styled from "styled-components";

export const Select = styled.div`
  .custom-select {
    position: relative;
    display: inline-block;
  }

  .custom-select::before,
  .custom-select::after {
    --size: 0.3rem;
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
  }

  .custom-select::before {
    border-bottom: var(--size) solid ${({ theme }) => theme.colors.text};
    z-index: 1;
    margin-top: -0.3rem; /* Adjust these values */
  }

  .custom-select::after {
    border-top: var(--size) solid ${({ theme }) => theme.colors.text};
    margin-top: 0.3rem; /* And these, to position arrows correctly */
  }

  select {
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /* width: 100%; */
    position: relative;
    width: 100%;
    font-size: 1.15rem;
    padding: 0.5rem 2rem 0.5rem 1rem;
    background-color: ${({ theme }) => theme.backgroundStart};
    border: 1px solid #caced1;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
    text-wrap: balance;
  }
`;

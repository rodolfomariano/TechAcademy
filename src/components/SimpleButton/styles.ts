import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 400;
  background-color: var(--primary-low);
  color: var(--white);
  border: none;
  padding: .5rem 0;
  border-radius: .5rem;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(.8);
  }

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`
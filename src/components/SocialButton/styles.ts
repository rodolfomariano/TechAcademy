import styled from 'styled-components'

export const Container = styled.button`
  width: 100px;
  background: transparent;
  box-shadow: 0 0 2px var(--inactive-button-color);
  padding: .5rem 0;
  border-radius: .5rem;
  border: none;
  color: var(--inactive-button-color);
  transition: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
`
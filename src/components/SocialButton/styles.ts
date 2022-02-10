import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background: transparent;
  box-shadow: 0 0 2px var(--inactive-button-color);
  padding: .5rem 0;
  border-radius: .5rem;
  border: none;
  color: var(--inactive-button-color);
  transition: 300ms;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: .25rem;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
`
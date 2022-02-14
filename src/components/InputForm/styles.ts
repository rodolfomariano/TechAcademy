import { HTMLProps, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputFormProps extends HTMLProps<HTMLInputElement> {

}

export const Container = styled.div`
  border-bottom: 2px solid var(--gray-300);
  color: var(--gray-400);
  padding: .25rem;

  display: flex;
  align-items: center;

  &:focus-within {
    border: 1px solid var(--primary);
    border-radius: .5rem;
  }
  
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: .25rem .5rem;
  color: var(--gray-400);
  font-weight: 300;

  &:focus {
    outline: none;
  }


`

export const Button = styled.button`
  border: none;
  background: transparent;
  color: var(--gray-200);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpanError = styled.span`
  font-size: 12px;
  color: var(--red);
  margin-top: -1rem;
`
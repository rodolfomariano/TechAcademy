import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);

  display: flex;

  @media(max-width: 1080px) {
    #image-container {
      display: none;
    }
  }
`

export const ImageContainer = styled.section`
  max-width: 55%;
  width: 100%;
  height: 100vh;
  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`

export const Text = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--white);
  text-align: center;
`

export const LoginContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: var(--primary);
`

export const LoginContent = styled.div`
  width: 80%;
  max-width: 350px;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
`

export const HaveAccountText = styled.p`
  margin-top: 1.25rem;
  font-size: 14px;
  color: var(--gray-300);
`

export const HaveAccountButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-low);
  margin: 1rem 0 0 .5rem;
  
  transition: color 300ms;

  &:hover {
    color: var(--primary);
  }
`

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Input = styled.input`
  width: 100%;
`

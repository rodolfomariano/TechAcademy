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
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
`

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  width: 100%;
`

export const FormInputButton = styled.button`

`
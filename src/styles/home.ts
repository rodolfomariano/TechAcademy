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

export const ForgotPasswordButton = styled.button`
  background: transparent;
  border: none;
  margin-top: .25rem;
  font-size: 12px;
  color: var(--gray-600);
  transition: color 300ms;

  &:hover {
    color: var(--primary);
  }
`

export const CreateAccountButton = styled.button`
  background: transparent;
  border: none;
  margin-top: 1.25rem;
  font-size: 1.25rem;
  color: var(--primary);
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }
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
export const DividerContainer = styled.div`
  position: relative;
  width: 330px;
  height: 20px;
  

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DividerRow = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--background-color-bar);

  
`

export const DividerText = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30px;
  color: var(--gray-200);
  text-align: center;
  background-color: var(--background-color);

  display: inline-block;
`

export const SocialButtonContainer = styled.div`
  width: 330px;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
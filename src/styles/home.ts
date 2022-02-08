import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);

  @media(max-width: 1080px) {
    #image-container {
      display: none;
    }
  }
`

export const ImageContainer = styled.section`
  max-width: 55%;
  height: 100vh;
  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;

`

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
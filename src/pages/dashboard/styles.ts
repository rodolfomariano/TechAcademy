import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1330px;
  min-height: calc(100vh - 50px);
  padding: 0 1rem;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
`
export const SelectTechnologyContainer = styled.div`
  flex:1;
  padding: 4rem 1rem;
  text-align: center;
  overflow-x: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const SelectTechnologyTitle = styled.h1`
  color: var(--gray-500);
  font-size: 1.5rem;
  font-weight: 600;
`
export const TechnologiesTypeContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 80%;
  border-bottom: 1px solid var(--background-color-bar);
`

export const TechnologyTypeButton = styled.button`
  width: 33%;
  background: transparent;
  color: var(--inactive-button-color);
  font-size: 1rem;
  padding: .5rem 0;
  border: none;
  transition: 300ms;

  &:hover {
    color: var(--primary);
    filter: brightness(.5);
  }

`

export const SpanTechnologySelected = styled.div`
  bottom: 0;
  position: absolute;
  flex: 1;
  width: 33%;
  height: 2px;
  background-color: var(--primary);
  transition: 300ms;
`

export const TechnologiesContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 290px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const TechnologyContent = styled.div`
  /* background-color: yellow; */
  position: absolute;
  top: 0;
  left: 33%;
  transition: 800ms;


  display: flex;
  align-items: center;
  justify-content: center;

  &#backend {
    margin-left: 100%;
  }
`

export const TechnologyButton = styled.button`
  width: 100px;
  height: 100px;
  background: transparent;
  border: none;
  transition: background-color 300ms;

  background: var(--primary-low);
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);

  &:hover {
    background: var(--primary);
  }

  &#zero {
    margin-top: 0;
    margin-left: -20px;
  }

  &#one {
    margin-top: -95px;
    margin-left: -20px;
  }

  &#two {
    /* margin-top: -100px; */
    margin-left: -20px;
  }

  &#three {
    margin-bottom: -190px;
    margin-left: -100px;
  }

  &#four {
    margin-bottom: -285px;
    margin-left: -180px;
  }

  &#five {
    margin-bottom: -190px;
    margin-left: -180px;
  }

  &#six {
    margin-top: 95px;
    margin-left: -20px;
  }

`

export const AttentionPhrase = styled.p`
  color: var(--gray-500);
  font-size: 1rem;
  font-weight: 400;
`

export const SelectedTechnologiesContainer = styled.div`
  flex:1;
  padding: 4rem 1rem;
  /* background-color: blue; */
`

export const TechnologiesSelected = styled.h2`
  color: var(--gray-500);
  font-size: 1.25rem;
  font-weight: 400;
`

export const SelectedTechnologiesContent = styled.div`
  width: 100%;
  height: 440px;
  background-color: var(--gray-50);
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const ContinueButton = styled.button`
  width: 150px;
  height: 38px;
  background-color: var(--primary-low);
  color: white;
  border: none;
  margin-left: auto;
  border-radius: .25rem;
  transition: background-color 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--primary);
  }
`
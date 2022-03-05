
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useFirebaseAuth } from '../../hooks/auth'
import { TopBar } from '../../components/TopBar'
import { DiJavascript1, DiHtml5, DiCss3, DiAngularSimple, DiReact, DiNodejs, DiJava, DiPython, DiPhp, DiSwift, DiIonic } from 'react-icons/di'
import { FaVuejs, FaSass } from 'react-icons/fa'
import { SiNestjs, SiCsharp, SiElixir, SiKotlin, SiXamarin } from 'react-icons/si'
import { GrGolang } from 'react-icons/gr'
import { RiFlutterFill } from 'react-icons/ri'
import { AiFillAndroid } from 'react-icons/ai'

import {
  Container,
  Content,
  SelectTechnologyContainer,
  SelectedTechnologiesContainer,
  SelectTechnologyTitle,
  TechnologiesTypeContainer,
  TechnologyTypeButton,
  SpanTechnologySelected,
  TechnologiesContainer,
  TechnologyContent,
  TechnologyButton,
  AttentionPhrase,
  TechnologiesSelected,
  SelectedTechnologiesContent,
  ContinueButton,
} from './styles'

export default function Dashboard() {
  const [technologyType, setTechnologyType] = useState('')
  const [technologySelectedBar, setTechnologySelectedBar] = useState(0)

  const router = useRouter()

  function handleAlterTypeOfTechnologySelected(type: string) {
    setTechnologyType(type)

    type === 'frontend' && setTechnologySelectedBar(0)
    type === 'backend' && setTechnologySelectedBar(33)
    type === 'mobile' && setTechnologySelectedBar(66)
  }


  return (
    <Container>
      <TopBar />
      <Content>

        <SelectTechnologyContainer>
          <SelectTechnologyTitle>
            Selecione as tecnologias que você <br />
            quer estudar
          </SelectTechnologyTitle>

          <TechnologiesTypeContainer>
            <TechnologyTypeButton
              style={{ color: technologyType === 'frontend' ? '#3E788B' : '#707886b3' }}
              onClick={() => handleAlterTypeOfTechnologySelected('frontend')}
            >Front-end
            </TechnologyTypeButton>
            <TechnologyTypeButton
              style={{ color: technologyType === 'backend' ? '#3E788B' : '#707886b3' }}
              onClick={() => handleAlterTypeOfTechnologySelected('backend')}
            >Back-end
            </TechnologyTypeButton>
            <TechnologyTypeButton
              style={{ color: technologyType === 'mobile' ? '#3E788B' : '#707886b3' }}
              onClick={() => handleAlterTypeOfTechnologySelected('mobile')}
            >Mobile
            </TechnologyTypeButton>


            <SpanTechnologySelected style={{ marginLeft: `${technologySelectedBar}%` }} />
          </TechnologiesTypeContainer>
          <TechnologiesContainer>
            <TechnologyContent
              style={{
                left: technologyType === 'frontend' || technologyType === ''
                  ? '33%'
                  : technologyType === 'backend' ? '-66%' : '-99%'
              }}
            >
              <TechnologyButton id='zero'><DiHtml5 size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='one'><DiCss3 size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='two'><FaVuejs size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='three'><FaSass size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='four'><DiAngularSimple size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='five'><DiReact size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='six'><DiJavascript1 size={32} color='#FFF' /></TechnologyButton>
            </TechnologyContent>

            <TechnologyContent
              id='backend'
              style={{
                left: technologyType === 'backend'
                  ? '-66%'
                  : technologyType === 'mobile' ? '-180%' : '33%'
              }}
            >
              <TechnologyButton id='zero'><DiJava size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='one' style={{ color: '#FFF', fontWeight: 600 }}>GO</TechnologyButton>
              <TechnologyButton id='two'><SiCsharp size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='three'><DiPython size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='four'><DiPhp size={40} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='five'><SiElixir size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='six'><DiNodejs size={48} color='#FFF' /></TechnologyButton>
            </TechnologyContent>

            <TechnologyContent
              id='backend'
              style={{ left: technologyType === 'mobile' ? '-66%' : '33%' }}
            >
              <TechnologyButton id='zero'><RiFlutterFill size={32} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='one'><SiKotlin size={24} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='two'><AiFillAndroid size={24} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='three'><DiSwift size={24} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='four'><DiIonic size={48} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='five'><SiXamarin size={24} color='#FFF' /></TechnologyButton>
              <TechnologyButton id='six'><DiReact size={48} color='#FFF' /></TechnologyButton>
            </TechnologyContent>
          </TechnologiesContainer>

          <AttentionPhrase>
            Você pode selecionar quantas quiser! <br />
            Mas lembre-se, o foco ajuda no aprendizado. <br />
            Você poderá selecionar outra tecnologia sempre que quiser.
          </AttentionPhrase>

        </SelectTechnologyContainer>

        <SelectedTechnologiesContainer>
          <TechnologiesSelected>Você selecionou 2 tecnologias</TechnologiesSelected>

          <SelectedTechnologiesContent>

          </SelectedTechnologiesContent>

          <ContinueButton>
            Continuar
          </ContinueButton>
        </SelectedTechnologiesContainer>

      </Content>
    </Container >
  )
}
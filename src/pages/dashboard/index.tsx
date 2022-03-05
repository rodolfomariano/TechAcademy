
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { FiTrash } from 'react-icons/fi'

import { useFirebaseAuth } from '../../hooks/auth'
import { TopBar } from '../../components/TopBar'

import { frontendData, backendData, mobileData } from '../../services/technologies'


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
  TechnologiesContainerHeader,
  ClearTechnologiesToStudyButton,
  TechnologyContent,
  TechnologyButton,
  AttentionPhrase,
  TechnologiesSelected,
  SelectedTechnologiesContent,
  ContinueButton,
  SelectedTechnologyCard,
  CardContent,
  CardIcon,
  CardDescription,
  CardTitle,
  CardRemoveButton,
} from './styles'

export default function Dashboard() {
  const [technologyType, setTechnologyType] = useState('')
  const [technologySelectedBar, setTechnologySelectedBar] = useState(0)
  const [technologiesToStudy, setTechnologiesToStudy] = useState<string[]>([])

  const router = useRouter()

  function handleAlterTypeOfTechnologySelected(type: string) {
    setTechnologyType(type)

    type === 'frontend' && setTechnologySelectedBar(0)
    type === 'backend' && setTechnologySelectedBar(33)
    type === 'mobile' && setTechnologySelectedBar(66)
  }

  function handleAddTechnologyToStudy(item: string) {
    setTechnologiesToStudy([...technologiesToStudy, item])
  }

  function handleRemoveTechnologyToStudy(item: string) {
    const removeItem = technologiesToStudy.filter(tech => tech !== item)
    setTechnologiesToStudy([...removeItem])
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
              {frontendData.map(item => {
                const haveItem = technologiesToStudy.find(tech => tech === item.name)

                return (
                  <TechnologyButton
                    key={item.id}
                    id={item.id}
                    onClick={() => haveItem ? handleRemoveTechnologyToStudy(item.name) : handleAddTechnologyToStudy(item.name)}
                    style={{ backgroundColor: haveItem && item.bgColor }}
                  >
                    {item.icon}
                  </TechnologyButton>
                )
              })}
            </TechnologyContent>

            <TechnologyContent
              id='backend'
              style={{
                left: technologyType === 'backend'
                  ? '-66%'
                  : technologyType === 'mobile' ? '-180%' : '33%'
              }}
            >
              {backendData.map(item => {
                const haveItem = technologiesToStudy.find(tech => tech === item.name)

                return (
                  <TechnologyButton
                    key={item.id}
                    id={item.id}
                    onClick={() => haveItem ? handleRemoveTechnologyToStudy(item.name) : handleAddTechnologyToStudy(item.name)}
                    style={{ backgroundColor: haveItem && item.bgColor }}
                  >
                    {item.icon}
                  </TechnologyButton>
                )
              })}
            </TechnologyContent>

            <TechnologyContent
              id='backend'
              style={{ left: technologyType === 'mobile' ? '-66%' : '33%' }}
            >
              {mobileData.map(item => {
                const haveItem = technologiesToStudy.find(tech => tech === item.name)

                return (
                  <TechnologyButton
                    key={item.id}
                    id={item.id}
                    onClick={() => haveItem ? handleRemoveTechnologyToStudy(item.name) : handleAddTechnologyToStudy(item.name)}
                    style={{ backgroundColor: haveItem && item.bgColor }}
                  >
                    {item.icon}
                  </TechnologyButton>
                )
              })}
            </TechnologyContent>
          </TechnologiesContainer>

          <AttentionPhrase>
            Você pode selecionar quantas quiser! <br />
            Mas lembre-se, o foco ajuda no aprendizado. <br />
            Você poderá selecionar outra tecnologia sempre que quiser.
          </AttentionPhrase>

        </SelectTechnologyContainer>

        <SelectedTechnologiesContainer>
          <TechnologiesContainerHeader>
            <TechnologiesSelected>
              {technologiesToStudy.length === 0
                ? 'Nenhuma tecnologia selecionada'
                : technologiesToStudy.length === 1
                  ? `Você selecionou 1 tecnologia`
                  : `Você selecionou ${technologiesToStudy.length} tecnologias`
              }
            </TechnologiesSelected>

            <ClearTechnologiesToStudyButton
              onClick={() => setTechnologiesToStudy([])}
            >
              Limpar
            </ClearTechnologiesToStudyButton>
          </TechnologiesContainerHeader>

          <SelectedTechnologiesContent>
            {
              technologiesToStudy.map(item => {
                const findFrontendTechnology = frontendData.find(tech => tech.name === item)
                const findBackendTechnology = backendData.find(tech => tech.name === item)
                const findMobileTechnology = mobileData.find(tech => tech.name === item)

                return (

                  <SelectedTechnologyCard key={item}>
                    <CardContent>
                      <CardIcon style={{ backgroundColor: findFrontendTechnology?.bgColor || findBackendTechnology?.bgColor || findMobileTechnology?.bgColor }}>
                        {findFrontendTechnology?.icon || findBackendTechnology?.icon || findMobileTechnology?.icon}
                      </CardIcon>

                      <CardDescription>
                        <CardTitle>{findFrontendTechnology?.title || findBackendTechnology?.title || findMobileTechnology?.title}</CardTitle>
                      </CardDescription>

                    </CardContent>

                    <CardRemoveButton
                      onClick={() => handleRemoveTechnologyToStudy(item)}
                    >
                      <FiTrash size={20} />
                    </CardRemoveButton>
                  </SelectedTechnologyCard>
                )
              }


              )
            }
          </SelectedTechnologiesContent>

          <ContinueButton>
            Continuar
          </ContinueButton>
        </SelectedTechnologiesContainer>

      </Content>
    </Container >
  )
}
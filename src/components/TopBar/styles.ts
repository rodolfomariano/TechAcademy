import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1330px;
  padding: 0 1rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  #logo {
    width: 200px;
  }
`

export const ActionContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NotificationButton = styled.button`
  border: none;
  background: transparent;
  color: var(--white);
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(.9);
  }
`

export const UserAvatar = styled.button`
  width: 30px;
  height: 30px;
  background: var(--white);
  border: none;
  border-radius: 50%;
  transition: filter 300ms;

  #avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  &:hover {
    filter: brightness(.9);
  }
`

export const Avatar = styled.img`

`
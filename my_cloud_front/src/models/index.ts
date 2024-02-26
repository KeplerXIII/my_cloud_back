export type DetailedUser = {
  id: number
  name: string
  avatar: string
  details: {
    city: string
    company: string
    position: string
  }
}

export type User = Pick<DetailedUser, 'id' | 'name'>

export type DetailsProps = {
  info: User
}

export type FetchData<T> = {
  data: T | undefined
  isLoading: boolean
  hasError: Error | null
}

export interface FormData {
  username: string
  password: string
  email: string
}

export interface authBlockProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

export type userID = {
  userID: string
}

export type FileData = {
  original_name: string
  size: number
  upload_date: string
}

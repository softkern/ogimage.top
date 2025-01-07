import { create } from 'zustand'

interface OGState {
  type: string
  title: string
  description: string
  url: string
  image: string
  width: string
  height: string
  setField: (field: string, value: string) => void
  reset: () => void
}

const initialState = {
  type: 'website',
  title: '',
  description: '',
  url: '',
  image: '',
  width: '1200',
  height: '630',
}

export const useOGStore = create<OGState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () => set(initialState),
}))


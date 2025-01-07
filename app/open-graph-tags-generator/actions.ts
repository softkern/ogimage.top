'use server'

import { useOGStore } from "@/stores/opengraph-store"


export async function updateOGData(prevState: any, formData: FormData) {
  const data = {
    type: formData.get('type'),
    title: formData.get('title'),
    description: formData.get('description'),
    url: formData.get('url'),
    image: formData.get('image'),
    width: formData.get('width'),
    height: formData.get('height'),
  }

  // Update the Zustand store
  const setField = useOGStore.getState().setField
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      setField(key, value)
    }
  })

  return { message: 'OG data updated successfully' }
}


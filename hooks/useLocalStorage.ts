import React, { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      let value: T
      try {
        value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
      } catch (e) {
        value = defaultValue
      }
      return value
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}
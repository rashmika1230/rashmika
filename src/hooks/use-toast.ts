import { useState } from 'react'

interface ToastProps {
  title: string
  description?: string
  variant?: 'default' | 'destructive'
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, variant = 'default' }: ToastProps) => {
    // Simple alert-based toast for now
    // In a production app, you'd implement a proper toast system
    if (variant === 'destructive') {
      alert(`Error: ${title}${description ? '\n' + description : ''}`)
    } else {
      alert(`${title}${description ? '\n' + description : ''}`)
    }
    
    setToasts(prev => [...prev, { title, description, variant }])
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.slice(1))
    }, 3000)
  }

  return { toast, toasts }
}
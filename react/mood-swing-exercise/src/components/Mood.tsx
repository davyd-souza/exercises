// STYLE
import './Mood.css'

// UTIL
type MoodProps = {
  mood: string
}

export function Mood({ mood }: MoodProps) {
  return (
    <i className={`Mood fa-solid fa-face-${mood}`}></i>
  )
}
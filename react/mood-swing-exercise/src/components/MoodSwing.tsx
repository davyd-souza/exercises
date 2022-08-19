// DEPENDENCY
import { useState } from 'react'

// COMPONENT
import { Mood } from './Mood'

// STYLE
import './MoodSwing.css'

// UTIL
const moods: string[] = ['smile', 'frown']

export function MoodSwing() {
  const [ mood, setMood ] = useState<string>('')
  const [ totalMood, setTotalMood ] = useState<number>(0)
  const [ totalHappy, setTotalHappy ] = useState<number>(0)
  const [ totalSad, setTotalSad ] = useState<number>(0)

  const handleClick = () => {
    flipMood()
  }

  const flipMood = () => {
    const curMood = moods[Math.floor(Math.random() * moods.length)]

    curMood === 'smile'
    ? setTotalHappy(totalHappy + 1) 
    : setTotalSad(totalSad + 1)

    setTotalMood(totalMood + 1)
    setMood(curMood)
  }

  return (
    <div className="MoodSwing">
      <Mood mood={mood} />
      <button onClick={handleClick}>swing</button>
      <p>
        Out of {totalMood} mood swings, there have been {totalHappy} happy and {totalSad} sad
      </p>
    </div>
  )
}
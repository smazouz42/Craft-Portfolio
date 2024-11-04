import React from 'react'

interface TitleProps {
  width?: number
  title: string
}

const Title: React.FC<TitleProps> = ({ width, title }) => {
  return (
    <div className="grow flex items-center gap-2">
      <span className="text-purple-400">#</span>
      <span>{title}</span>
      <div
        className="h-[2px] bg-purple-400"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export { Title }

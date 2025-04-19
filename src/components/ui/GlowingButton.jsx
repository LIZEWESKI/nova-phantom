import React from 'react'
import { Button } from "@/components/ui/button"

const GlowingButton = ({text}) => {
  return (
    <Button className="rounded-full relative bg-background hover:bg-background/80 text-foreground border-0 overflow-hidden group">
        <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(40deg,#3b82f6,#8b5cf6,#ec4899)] opacity-70 blur-md group-hover:opacity-100 transition-opacity"></span>
        </span>
        <span className="absolute inset-[1.5px] rounded-full bg-background z-10"></span>
        <span className="relative z-20 px-4">
        {text}
        </span>
    </Button>
  )
}

export default GlowingButton
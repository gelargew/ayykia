import React from 'react'

interface theProps extends React.HTMLProps<HTMLDivElement> {
    animate: false
}

export default function DivFadeIn({animate, className, ...props}: theProps) {
    
    
    return (
        <div {...props} className={`div-fade-in ${className}`}>
            
        </div>
    )
}
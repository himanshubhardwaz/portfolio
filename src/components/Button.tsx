import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className: string
}

const Button: FC<Props> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`bg-red-500 px-4 py-2 rounded-md ${className}`}>
            {children}
        </button>
    )
}

export default Button
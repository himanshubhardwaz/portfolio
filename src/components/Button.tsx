import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string,
    onClick?: (e: any) => void,
}

const Button: FC<Props> = ({ children, className = "", ...rest }) => {
    return (
        <button className={`bg-red-500 px-4 py-2 rounded-md ${className}`} {...rest}>
            {children}
        </button >
    )
}

export default Button
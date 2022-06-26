import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string,
    onClick?: (e: any) => void,
    loading?: boolean
}

const Button: FC<Props> = ({ children, className = "", loading = false, ...rest }) => {
    return (
        <button className={`bg-red-500 px-4 py-2 rounded-md ${className}`} {...rest} disabled={loading}>
            {!loading ? children : 'Please Wait ...'}
        </button >
    )
}

export default Button
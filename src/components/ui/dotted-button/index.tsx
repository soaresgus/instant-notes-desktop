import { cn } from "@/lib/utils"

interface DottedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export function DottedButton({ children, ...props }: DottedButtonProps) {
    return (
        <button
            {...props}
            className={cn("px-4 py-2 border-2 border-dotted border-gray-400 rounded-md text-gray-400 hover:border-gray-600 hover:text-gray-600 transition-colors duration-300", props.className)}
        >
            {children}
        </button>
    )
}


interface ReusableSubmiBtnProps {
    children: React.ReactNode;
    disabled: boolean;
}

const ReusableSubmitBtn: React.FC<ReusableSubmiBtnProps> = ({children, disabled}) => {
  return (
    <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90" disabled={disabled}>
        {children}
    </button>
  )
}

export default ReusableSubmitBtn

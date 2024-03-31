interface ReusableInputProps {
    label: string;
    placeholder: string;
    name: string;
    isTextArea?: boolean;
    register?: any;
    readonly? : boolean;
    value? : string;
}

const ReusableInput: React.FC<ReusableInputProps> = ({ name, label, placeholder, isTextArea, register, readonly, value }) => {
    return (
        <>
            <label className="mb-2.5 block text-black dark:text-white">
                {label}
            </label>

            {
                !isTextArea ? (
                    <input
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        {...register(name)}
                        readOnly={readonly}
                        value={value}
                    />
                ) :
                    (
                        <textarea
                            name={name}
                            rows={6}
                            placeholder={placeholder}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            {...register(name)}
                        ></textarea>
                    )
            }
        </>
    )
}

export default ReusableInput;

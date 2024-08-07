import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const Input = ({ name, ...rest }: Props) => {
  const { register, formState } = useFormContext();
  const error: string | undefined = formState.errors[name] ? (formState.errors[name].message as string) : undefined;
  return (
    <div className="relative flex h-16 flex-col gap-1">
      <input
        {...register(name)}
        className="h-10 rounded-md border border-white bg-transparent pl-4 text-white placeholder:italic focus:border-[2px] focus:outline-none"
        name={name}
        id={name}
        {...rest}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;

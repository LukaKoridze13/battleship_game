interface Props {
  children: React.ReactNode;
  className?: string;
}
const FullPage = ({ children, className }: Props) => {
  return <main className={`h-screen w-screen bg-black pt-20 ${className}`}>{children}</main>;
};

export default FullPage;

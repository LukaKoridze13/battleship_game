interface Props {
  children: React.ReactNode;
  className?: string;
}
const FullPage = ({ children, className }: Props) => {
  return <main className={`fixed left-0 top-0 h-screen w-screen bg-black ${className}`}>{children}</main>;
};

export default FullPage;

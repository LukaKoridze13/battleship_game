interface Props {
  children: React.ReactNode;
  className?: string;
}
const Content = ({ children, className }: Props) => {
  return <div className={`mx-auto w-full max-w-[1080px] px-6 py-4 ${className}`}>{children}</div>;
};

export default Content;

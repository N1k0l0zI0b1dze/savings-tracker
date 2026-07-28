type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
      {children}
    </div>
  );
};

export default PageContainer;

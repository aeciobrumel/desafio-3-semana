export const SectionContent = ({ children }) => {
  return (
    <section className="bg-white w-screen mt-5 mb-5 mr-5 rounded-[50px] pl-9 pr-9 pt-5 max-h-[calc(100vh-50px)]">
      <div className="overflow-hidden overflow-y-auto  max-h-[100%] pl-11 pr-11 ">
        {children}
      </div>
    </section>
  );
};

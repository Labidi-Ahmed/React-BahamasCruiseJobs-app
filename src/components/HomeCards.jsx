import Card from './Card';

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card
              btnText={'Browse Jobs'}
              title={'For Developers'}
              content={'Browse our React jobs and start your career today'}
              bgColor={'bg-gray-100'}
              btnBgColor={'bg-black'}
              tab={'jobs'}
            />
            <Card
              btnText={'Add Job'}
              title={'For Employers'}
              content={
                'List your job to find the perfect developer for the role content'
              }
              bgColor={'bg-indigo-100'}
              btnBgColor={'bg-indigo-500'}
              tab={'add-job'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;

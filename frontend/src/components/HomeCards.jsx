import Card from './Card';

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card
              btnText={'Explore Jobs'}
              title={'For Cruise Ship Jobs'}
              content={
                'Discover exciting career opportunities aboard Bahamas cruise ships'
              }
              bgColor={'bg-gray-100'}
              btnBgColor={'bg-gray-800'}
              tab={'jobs'}
            />
            <Card
              btnText={'Post Job'}
              title={'For Employers'}
              content={
                'List your cruise ship job openings and connect with qualified candidates'
              }
              bgColor={'bg-blue-100'}
              btnBgColor={'bg-blue-500'}
              tab={'add-job'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;

import Categories from "./Categories";
import NewProduct from "./NewProduct";

const Home = () => {
  return (
    <>
      <div className="mx-16">
        <div className="flex w-full h-screen my-16">
          <div className="basis-1/2 mr-5 ">
            <div className="h-1/2">
              <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem aliquid ab tempora numquam omnis cupiditate,
                asperiores quos maiores cum repudiandae quo eligendi ullam est
                officiis!
              </p>
            </div>
            <div className="flex h-1/2">
              <h1 className="basis-1/2 bg-black text-white mr-5 h-full w-full rounded-3xl">
                test
              </h1>
              <h1 className="basis-1/2 bg-black text-white h-full w-full rounded-3xl">
                test
              </h1>
            </div>
          </div>
          <div className="basis-1/2 bg-black text-white h-full w-full rounded-3xl">
            img
          </div>
        </div>

        <Categories />
      </div>
      <NewProduct />
    </>
  );
};

export default Home;

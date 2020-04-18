export default () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center w-full p-12">
      <h2 className="text-3xl font-bold text-center">
        I also have a newsletter!
      </h2>
      <p className="mt-2 font-light w-4/5 text-center leading-relaxed">
        It includes intersting stuff about tech and will arrive to your mailbox
        no more than once every 2 weeks
      </p>
      <div className="flex w-1/2 justify-center mt-5">
        <input
          className="appearance-none w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600"
          type="text"
          placeholder="Enter Email"
        />
        <button
          className="ml-2 shadow bg-brand2 focus:shadow-outline focus:outline-none text-brand-500 font-bold py-2 px-4 rounded"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

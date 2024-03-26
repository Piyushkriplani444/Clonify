const InputSearch = () => {
  return (
    <div className="py-10 h-28 max-2xl p-2">
      <div className="mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="focus:bg-grey-100 p-1 m-2 "
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
    </div>
  );
};

export default InputSearch;

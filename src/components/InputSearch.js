import search from "../assets/img/search.png";

const InputSearch = () => {
  return (
    <div className="w-4/5 h-10  mt-3 bg-white rounded-md border border-gray-200 justify-start items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
        <img className="w-4 h-3" src={search} alt="" />
        <input
          className="w-full grow  shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-snug"
          placeholder="Search ..."
          type="text"
        />
      </div>
    </div>
  );
};

export default InputSearch;

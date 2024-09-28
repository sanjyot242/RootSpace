function SearchOverLay() {
  return (
    <div className='flex flex-1 flex-col items-start gap-8 justify-center'>
      <div className='flex p-8 gap-8 items-center self-stretch rounded-xxs border-stroke-primary_hover border-[1px]'>
        <div className='flex justify-center items-center'>
          <img src='/images/search.svg' alt='' className='w-24 h-24' />
        </div>
        <input
          className='flex p-none items-center flex-1 paragraphsmallregular text-text-tertiary border-0'
          placeholder='Search'></input>
      </div>
    </div>
  );
}

export default SearchOverLay;

// import Summary from "./Summary";

function PlanPicker() {
  return (
    <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
    

      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
  
        >
          Add seat
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
        
        >
          Add month
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
       
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default PlanPicker;

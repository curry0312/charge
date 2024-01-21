"use client";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useDispatch } from "react-redux";
import { onOpen } from "@/lib/features/dashboard/addNewBillSlice";

const FUNCTION_LIST = [
  {
    id: 1,
    icon: <PieChartRoundedIcon sx={{ color: "white", fontSize: 50 }} />,
    title: "Analysis",
  },
  {
    id: 2,
    icon: <AddCircleOutlineRoundedIcon sx={{ color: "white", fontSize: 50 }} />,
    title: "Add",
  },
  {
    id: 3,
    icon: <SettingsRoundedIcon sx={{ color: "white", fontSize: 50 }} />,
    title: "Settings",
  },
];
export default function SelectFunction() {

  const dispatch = useDispatch()
  function openAddNewBillForm() {
    dispatch(onOpen())
  }
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-stone-700">
      <div className="flex">
        {FUNCTION_LIST.map((item) => (
          
          <button onClick={openAddNewBillForm} key={item.id} className="p-3 basis-1/3 text-center hover:bg-black">
            <>
            {item.icon}
            </>
            <p className="text-white text-sm">{item.title}</p>
        </button>
        ))}
      </div>
    </footer>
  );
}

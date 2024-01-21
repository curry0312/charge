import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IsOpen = {
  isOpen: boolean;
};

const initialState: IsOpen = {
  isOpen: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    onClose: (state) => {
      state.isOpen = !state.isOpen;
    },
    onOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const isOpen = (state: RootState) => state.addNewBillSlice.isOpen
export const { onClose, onOpen } = itemsSlice.actions;

export default itemsSlice.reducer;

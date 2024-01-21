"use server";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkUserExistAction = async ({
  user,
}: {
  user: KindeUser | null;
}) => {
  if (user) {
    const data = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!data) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email!,
          name: user.given_name!,
        },
      });
      return true;
    }
  }
  console.log("current user is already exist");
};

export type CreateBillActionType = {
  price: string;
  category: string;
  description: string;
  dob: string;
  userId: string;
};

export const createBillAction = async ({
  price,
  category,
  description,
  dob,
  userId,
}: CreateBillActionType) => {
  try {
    const data = await prisma.chargeModel.create({
      data: {
        price: price,
        description: description,
        category: category,
        date: dob,
        userId: userId,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

type GetCurrentMonthBillType = {
  date: string;
  userId: string;
};
export const getCurrentMonthBill = async ({
  date,
  userId,
}: GetCurrentMonthBillType) => {
  try {
    const data = await prisma.chargeModel.findMany({
      where: {
        date: date,
        userId: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

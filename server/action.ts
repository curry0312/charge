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
  return null
};

export const checkCurrentYearExistAction = async ({
  year,
  user,
}: {
  year: string;
  user: KindeUser;
}) => {
  const data = await prisma.yearModel.findFirst({
    where: {
      year: year,
    },
  });
  if (!data) {
    await prisma.yearModel.create({
      data: {
        year: year,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  }
};

export const checkCurrentMonthExistAction = async ({
  month,
}: {
  month: string;
}) => {
  const data = await prisma.monthModel.findFirst({
    where: {
      month: month,
    },
  });
  if (!data) {
    await prisma.monthModel.create({
      data: {
        month: month,
        yearModel: {
          connect: {
            id: "1",
          },
        },
      },
    });
  }
  console.log(data);
};

export const createBillAction = async () => {
  const data = await prisma.chargeModel.create({
    data: {
      price: "100",
      description: "test charge",
      category: "test category",
      date: "2022-02-02",
      monthModel: {
        connect: {
          id: "1",
        },
      },
    },
  });
  console.log(data);
};

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from 'db';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const dbUser = await prisma.user.findUnique({ where: { id: user.id } });

      if (!dbUser || dbUser.init) {
        return true;
      }

      const defaultProducts = await prisma.defaultProduct.findMany();

      const creates = defaultProducts.map((product) =>
        prisma.product.create({
          data: {
            owner: { connect: { id: user.id } },
            name: product.name,
            category: { connect: { id: product.categoryId } },
            color: product.color,
            imageUrl: product.imageUrl,
          },
        }),
      );

      await prisma.$transaction([
        ...creates,
        prisma.user.update({
          where: { id: user.id },
          data: { init: true },
        }),
      ]);

      return true;
    },
  },
});

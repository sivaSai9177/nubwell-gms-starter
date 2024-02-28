import NextAuth,{type DefaultSession} from "next-auth"



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/signin',
    error:'/auth/error'
  },
  events: {
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') return true;

    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser?.emailVerified) return false;

    //   if (existingUser.isTwoFactorEnabled) {
    //     const twoFactorConfirmation = await getTwoFactorConfirmationWithUserId(
    //       existingUser.id
    //     );
    //     if (!twoFactorConfirmation) return false;

    //     await db.twoFactorConfirmation.delete({
    //       where: {
    //         id:twoFactorConfirmation.id
    //       }
    //     })
    //   }

      return true
    },
    async session({session,user, token}){
    //   if (token.sub && session.user) {
    //     session.user.id = token.sub;
    //   }
    //   if (token.role && session.user) {
    //       session.user.role = token.role as UserRole; 
    //   }
    //   if (session.user) {
    //       session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean 
    //   }
    //   if (session.user) {
    //     session.user.name = token.name;
    //     session.user.email = token.email;
    //     session.user.isOAuth = token.isOAuth as boolean
    //   }
      return session;
    },
    async jwt({ token }){
    //   if (!token.sub) return token;
    //   const existingUser = await getUserById(token.sub);
    //   if (!existingUser) return token;
    //   const existingAccount = await getUserAccountById(existingUser.id);
    //   token.isOAuth = !!existingAccount
    //   token.role = existingUser.role;
    //   token.name = existingUser.name;
    //   token.email = existingUser.email;
    //   token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled
    //   return token;
    }
  },
    session: {
        strategy: "jwt",
    },
    ...authConfig,
})